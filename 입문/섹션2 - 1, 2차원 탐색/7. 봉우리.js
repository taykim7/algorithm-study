/* 
📝 봉우리
지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자
판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요. 
격자의 가장자리는 0으로 초기화 되었다고 가정한다.
만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

0 0 0 0 0 0 0
0 5 3 7 2 3 0
0 3 7 1 6 1 0
0 7 2 5 3 4 0
0 4 3 6 4 1 0
0 8 7 3 5 2 0
0 0 0 0 0 0 0

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50) 
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
다. 

▣ 출력설명
봉우리의 개수를 출력하세요.

▣ 입력예제 1 
5
5 3 7 2 3
3 7 1 6 1
7 2 5 3 4
4 3 6 4 1
8 7 3 5 2

▣ 출력예제 1
10


📝 강의 자료
function solution(arr){  
  let answer=0;
  let n=arr.length;
  // 상하좌우를 구해줄 dx dy
  let dx=[-1, 0, 1, 0];
  let dy=[0, 1, 0, -1];
  // 전체 순회
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      let flag=1;
      // 비교 순회
      for(let k=0; k<4; k++){
        // nx ny가 쌍으로 움직임 (상 하 좌 우)
        let nx=i+dx[k];
        let ny=j+dy[k];
        // nx, ny가 0 보다 크고 길이보다 작아야함 (맨끝에 위치한 경우)
        // 그리고 비교데이터보다 클 경우 flag는 0
        if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
          flag=0;
          break;
        }
      }
      // 비교 순회 끝
      // flag가 여전히 1이라는 건 다 비교 숫자보다 작다는 뜻
      if(flag) answer++;
    }
  }  
    
  return answer;
}

let arr=[
  [5, 3, 7, 2, 3], 
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];
console.log(solution(arr));
*/

// (1) 상하좌우를 각각 분기하여 처리했다.
function solution(arr) {
  // 길이
  let length = arr.length; // 5
  let count = 0;
  // 전체 순회
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      let udlr = [];
      // 비교할 데이터 삽입
      udlr.push(arr[i][j])
      // 상 - i가 맨 위에 있는 경우
      if (0 < i) {
        udlr.push(arr[i - 1][j]);
      }
      // 좌 - j가 맨 앞에 있는 경우
      if (0 < j) {
        udlr.push(arr[i][j - 1]);
      }
      // 우 - j가 맨 끝에 있는 경우
      if (length - 1 > j) {
        udlr.push(arr[i][j + 1]);
      }
      // 하 - i가 맨 밑에 있는 경우
      if (length - 1 > i) {
        udlr.push(arr[i+1][j]);
      }
      // 상하좌우 배열 중 제일 큰 숫자랑 비교
      if (Math.max(...udlr) === arr[i][j]) {
        count += 1;
      }
    }
  }
  return count;
}
let arr = [
  [5, 3, 7, 2, 3], 
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];
console.log(solution(arr));


// arr[1][1] 의 상하좌우는
// arr[0][1] arr[1][0] arr[1][2] arr[2][1]

// 즉, arr[i][j]는
// arr[i - 1][j - 1] arr[i][j - 1]
// arr[i + 1][j + 1] arr[i + 1][j] 을 비교하면 된다.

// 와 진짜 존나 어려워서 한참 걸렸다.
// 문제를 잘읽자.. 처음엔 상하좌우가 아니라 주변 숫자들을 비교하는 줄


// (2) 격자판의 크기를 확장해서 푸는 경우
function solution(arr) {
  let count = 0;
  let length = arr.length;

  // 격자의 가장자리는 0으로 초기화되었다고 가정되므로, 격자판의 크기를 확장(+2)합니다.
  let newArr = Array.from({ length: length + 2 }, () => Array(length + 2).fill(0));

  // 입력된 격자판의 값을 중앙에 복사.
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      // 새로운 배열 ← 기존데이터
      newArr[i + 1][j + 1] = arr[i][j];
    }
  }

  // 각 격자의 상하좌우를 확인하여 봉우리인지 판단합니다.
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= length; j++) {
      if (
        newArr[i][j] > newArr[i - 1][j] &&
        newArr[i][j] > newArr[i + 1][j] &&
        newArr[i][j] > newArr[i][j - 1] &&
        newArr[i][j] > newArr[i][j + 1]
      ) {
        count++;
      }
    }
  }

  return count;
}

let arr2 = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];
console.log(solution(arr2));