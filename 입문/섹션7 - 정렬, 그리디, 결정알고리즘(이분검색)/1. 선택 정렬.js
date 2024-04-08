/* 
📝 선택 정렬
N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 선택정렬입니다.

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 
있습니다.

▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.

▣ 입력예제 1 
6
13 5 11 7 23 15

▣ 출력예제 1
5 7 11 13 15 23


📝 강의 자료 - 배열 구조분해를 활용, 최소값을 찾고 위치 변경

function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length; i++){
    // 현재 index를 저장
    let idx=i;
    for(let j=i+1; j<arr.length; j++){
      // 현재 index보다 작으면 index를 작은걸로 변경 => 최소값을 찾음
      if(arr[j]<arr[idx]) idx=j;
    }
    // 최소값을 현재 인덱스로 이동 (배열 구조분해)
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  } 
  return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));
*/

// (1) 그냥 sort 활용
function solution(arr) {
  return arr.sort((a, b) => a - b);
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// (2) 정렬 알고리즘 사용 - 반복문마다 비교를 하며 배열 위치 이동
function solution(arr) {
  let n = arr.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = i + 1; j < n; j++) {
      // 현재 요소 저장
      let tmp = arr[j];
      // 비교 후 정렬
      if (arr[i] > arr[j]) {
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}
let arr2 = [13, 5, 11, 7, 23, 15];
console.log(solution(arr2));