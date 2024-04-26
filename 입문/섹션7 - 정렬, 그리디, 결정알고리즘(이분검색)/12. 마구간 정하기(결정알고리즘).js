/* 
📝 마구간 정하기(결정알고리즘)
N개의 마구간이 수직선상에 있습니다.
각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며,
마구간간에 좌표가 중복되는 일은 없습니다.

현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다. 
각 마구간에는 한 마리의 말만 넣을 수 있고,

가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다. 

C마리의 말을 N개의 마구간에 배치했을 때
가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.

▣ 출력설명
첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.

▣ 입력예제 1 
5 3
1 2 8 4 9

▣ 출력예제 1
3


📝 강의 자료

// mid의 거리만큼 배치를 몇마리까지 가능한지 카운트
function count(stable, mid){
  
  // 일단 ep를 배열 맨 처음요소
  let cnt=1, ep=stable[0];

  // 배열 두번째요소부터 전부 비교할거임
  for(let i=1; i<stable.length; i++){
  
    // ep를 뺀 값이 mid보다 크면 합격 + ep 변경
    if(stable[i]-ep>=mid){
      cnt++;
      ep=stable[i];
    }
  }
  return cnt;
}

function solution(c, stable){
  let answer;

  // 정렬
  stable.sort((a, b)=>a-b);

  // lt는 1, rt는 정렬의 맨 끝
  let lt=1;
  let rt=stable[stable.length-1];

  while(lt<=rt){
    // mid는 거리. lt와 rt의 중간
    let mid=parseInt((lt+rt)/2);

    // 갯수가 c보다 크면 정답
    // lt를 왜 변경하나 했는데 while문 탈출하려고
    if(count(stable, mid)>=c){
      answer=mid;
      lt=mid+1;
    }
    else rt=mid-1;
  }

  return answer;
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));

*/

// 
function solution(arr, xi) {
  
  arr.sort((a, b) => a - b);
  // 1, 2, 4, 8, 9

  let left = 1;
  let right = arr[arr.length - 1];

  while (left <= right) {

    // mid는 말 사이의 거리를 의미!
    let mid = Math.floor((left + right) / 2);
    
    // 하나씩 비교하며 말 사이의 거리가 mid 이상인 것이 xi여야함!
    let count = 1;

    // 일단 배열 맨 처음 요소
    let ep = arr[0];

    // 배열 두 번째 요소부터 전부 탐색할거임
    for (let i = 1; i < arr.length; i++) {

      // ep를 뺀 값이 mid보다 크다면 합격 + ep 변경
      if (mid <= arr[i] - ep) {
        count++;
        ep = arr[i];
      }
    }
    
    // count가 xi수보다 크면 return 아니면 right 줄이기
    if (xi <= count) {
      return count;
    } else {
      right = mid - 1;
    }
  }
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(arr, 3));

// 그냥 문제 자체가 어려웠다.
// https://velog.io/@rladpwl0512/7-12-%EB%A7%88%EA%B5%AC%EA%B0%84-%EC%A0%95%ED%95%98%EA%B8%B0%EA%B2%B0%EC%A0%95%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
// 이거보고 겨우 이해했다 ㅠ