/* 
📝 Special Sort(구글 인터뷰)

N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
음의 정수는 앞쪽에, 양의 정수는 뒷쪽에 있어야 한다.
또한 양의 정수와 음의 정수의 순서에는 변함이 없어야 한다.

▣ 입력설명
첫 번째 줄에 정수 N(5<=N<=100)이 주어지고,
그 다음 줄부터 음수를 포함한 정수가 주어진다.
숫자 0은 입력되지 않는다.

▣ 출력설명
정렬된 결과를 출력한다.

▣ 입력예제 1 
8
1 2 3 -3 -2 5 6 -6

▣ 출력예제 1
-3 -2 -6 1 2 3 5 6


📝 강의 자료
(1) 내 풀이랑 비슷한 방법.
function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
      if(arr[j]>0 && arr[j+1]<0){
        [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
      }
    }   
  } 
  return answer;
}
let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

(2) 단순히 음수면 push 그리고 정수면 push
function solution(arr){
  let answer=[];
  for(let x of arr){
    if(x<0) answer.push(x);
  }
  for(let x of arr){
    if(x>0) answer.push(x);
  }
  return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
*/

// (1) 그냥 이중포문으로 각각 양수,음수일때 바꾸기
function solution(arr) {
  for (let i = 0; i < arr.length -1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > 0 &&  0 > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      console.log(arr[j]);
    }
  }
  return arr;
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

// =====================

function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (0 > arr[i]) result.push(arr[i])
  }
  for (let i = 0; i < arr.length; i++) {
    if (0 < arr[i]) result.push(arr[i])
  }
  return result;
}
let arr2 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr2));

// ↑ 단순히 반복문을 두번 돌려서 음의 정수 -> 양의 정수 뽑아내는 방식
// 시간복잡도 O(n)

// -----------------------

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if(0 < arr[j] && 0 > arr[j + 1]){
        [arr[j], arr[j + 1]]=[arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
let arr3 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr3));

// ↑ 버블 정렬 기반으로 좌측(j)에 있는 수는 정수고, 우측(j+1)에 있는 수가 음수일 경우 서로 바꿈 
// 시간복잡도 O(n²)
// gpt 평으론 구현이 과도하다고 함

// 음의 정수는 앞쪽에, 양의 정수는 뒷쪽에 정렬하는 알고리즘 (양의 정수와 음의 정수의 순서에는 변함이 없어야함)

