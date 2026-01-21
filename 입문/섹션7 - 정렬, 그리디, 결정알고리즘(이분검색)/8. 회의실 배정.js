/* 
📝 회의실 배정
한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들려고 한다.
각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고,
각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라.
단, 회의는 한번 시작하면 중간에 중단될 수 없으며
한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

▣ 입력설명
첫째 줄에 회의의 수 n(1<=n<=100,000)이 주어진다.
둘째 줄부터 n+1 줄까지 각 회의의 정보가 주어지는데
이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다.
회의의 시작시간과 끝나는 시간의 조건은 (시작시간 <= 끝나는 시간)입니다.

▣ 출력설명
첫째 줄에 최대 사용할 수 있는 회의 수를 출력하여라.

▣ 입력예제 1 
5
1 4
2 3
3 5
4 6
5 7

▣ 출력예제 1
3

예제설명
(2, 3), (3, 5), (5, 7)이 회의실을 이용할 수 있다.

▣ 입력예제 2 
3
3 3
1 3
2 3

▣ 출력예제 2
2



📝 강의 자료

function solution(meeting){
  let answer=0;

  // *** 끝나는 순으로 정렬한다
  // 회의가 끝나는 순이 같으면 시작 순으로 정렬

  meeting.sort((a, b)=>{
    if(a[1]===b[1]) return a[0]-b[0];
    else return a[1]-b[1];
  })

  // 끝나는 시간 (기본 0)
  let et=0;

  // 전체 순회
  for(let x of meeting){
  
    // 시작 시간이 끝나는 시간보다 같거나 크면
    // 카운트 + 끝나는 시간 세팅
    if(x[0]>=et){
      answer++;
      et=x[1];
    }
  }
  return answer;
}
let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));
*/

// (1) 시작 순으로 정렬했음
// 처음 정렬할 때 끝나는 순으로 정렬하는게 낫다고 한다.
// 내가 우려했던 ... 시간대 사이에 낀 경우를 해결할 듯

function solution(arr) {
  let result = []

  // 시작 순으로 정렬
  arr.sort((a, b) => {
    return a[0] - b[0];
  })

  // 전체 순회
  for (let i = 0; i < arr.length; i++) {
    // 끝나는 시간
    let endTime = arr[i][1];
    let count = 1;
    
    // 다음 회의의 시작 시간과 비교
    for (let j = i + 1; j < arr.length; j++) {
      if (endTime <= arr[j][0]) {
        // 다음 회의의 시작 시간이 끝나는 시간보다 같거나 크면
        // 카운트, 끝나는 시간 담기
        count++;
        endTime = arr[j][1];
      }
    }
    result[i] = count;
  }
  // 최대값 가져오기
  return Math.max(...result);
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let arr2 = [[3, 3], [1, 3], [2, 3]];
console.log(solution(arr));

// ===============================

// 회의실 배정 알고리즘 (그리디 알고리즘)

function solution(arr) {
  // 시작순
  let sortArr = [...arr].sort((a, b) => { return a[0] - b[0] });
  let maxCount = 0;

  // 전체순회
  for (let i = 0; i < sortArr.length; i++) {
    let endTime = sortArr[i][1];
    let count = 1;

    // 다음회의부터 전체순회
    for (let j = i + 1; j < sortArr.length; j++) {
      // 다음회의의 시작시간이 끝나는 시간보다 같거나 클때 카운트
      if (endTime <= sortArr[j][0]) {
        endTime = sortArr[j][1];
        count++;
      }
    }

    // 가장 큰 카운트
    if (maxCount < count) maxCount = count;
  }

  return maxCount;
}
let arr3 = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let arr4 = [[3, 3], [1, 3], [2, 3]];
console.log(solution(arr3));

// ↑ 결론은 틀림.
// 시작 시간이 아니라 끝나는 시간 기준으로 정렬을 해야함.
// 왜냐면 빨리 끝날수록 다음 회의를 선택할 여지가 커지기 때문 (그리디)

// ------------------------------------

function solution(arr) {
  // 종료순
  let sortArr = [...arr].sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
  });

  let count = 0;
  let endTime = 0;

  // 전체순회
  for (const [start, end] of sortArr) {
    if (start >= endTime) {
      endTime = end;
      count++;
    }
  }

  return count;
}
let arr5 = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let arr6 = [[3, 3], [1, 3], [2, 3]];
console.log(solution(arr5));

// ↑ 한번 순회만으로도 할 수 있구나 ..