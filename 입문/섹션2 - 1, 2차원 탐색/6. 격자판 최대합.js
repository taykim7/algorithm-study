/* 
📝 격자판 최대합
5*5 격자판에 아래와 같이 숫자가 적혀있습니다.

10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19

N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50) 
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
다. 

▣ 출력설명
최대합을 출력합니다.

▣ 입력예제 1 
5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19

▣ 출력예제 1
155


// 와우 어려워지기 시작 ㅠ

📝 강의 자료 - 대각선 구하는 방식이 다름
function solution(arr){  
let answer=Number.MIN_SAFE_INTEGER;
let n=arr.length;
let sum1=sum2=0;
for(let i=0; i<n; i++){
  // 초기화
  sum1=sum2=0;
  for(let j=0; j<n; j++){
    sum1+=arr[i][j];
    sum2+=arr[j][i];
  }
  answer=Math.max(answer, sum1, sum2);
}
sum1=sum2=0;
// 대각선
for(let i=0; i<n; i++){
  sum1+=arr[i][i];
  sum2+=arr[i][n-i-1];
}  
answer=Math.max(answer, sum1, sum2); 
return answer;
}

let arr=[
  [10, 13, 10, 12, 15], 
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];
console.log(solution(arr));
*/

// (1) 이중for문으로 하나씩 구함. 
function solution(arr) {
  // 길이
  let length = arr.length;
  // 각 행의 합
  let resultRow=Array.from({length:length}, () => 0);
  // 각 열의 합
  let resultCol=Array.from({length:length}, () => 0);
  // 두 대각선의 합 배열
  let diagonal = [0, 0];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      // 각행, 각열 합 계산
      resultRow[i] += arr[i][j]
      resultCol[j] += arr[i][j]
      // 대각선 합 계산
      if (i === j) diagonal[0] += arr[i][j];
      if (length - 1 === i + j) diagonal[1] += arr[i][j];
    }
  }

  // 최대값 계산
  let result = 0;
  for (const item of resultRow) {
    if (result < item) result = item;
  }
  for (const item of resultCol) {
    if (result < item) result = item;
  }
  for (const item of diagonal) {
    if (result < item) result = item;
  }
  return result;
}
let arr = [
  [10, 13, 10, 12, 15], 
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];
console.log(solution(arr));

// 최대 값을 계산할 때 Math.max를 활용하는게 더 좋을 것 같다
// Math.max(...resultRow, ...resultCol, diagonal);