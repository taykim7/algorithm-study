/* 
📝 삽입 정렬
N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 삽입정렬입니다.

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다.
각 자연수는 정수형 범위 안에 있습니다. 

▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.

▣ 입력예제 1 
6
11 7 5 6 10 9

▣ 출력예제 1
5 6 7 9 10 11



📝 강의 자료
* 삽입정렬 : 두번째부터 시작해서 그 앞에 있는 자료와 비교하여 삽입할 위치를 지정

function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length; i++){
    let tmp=arr[i], j;
    for(j=i-1; j>=0; j--){
      if(arr[j]>tmp) arr[j+1]=arr[j];
      else break;
    }
    arr[j+1]=tmp;
  } 
  return answer;
}
let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));

function solution(arr){
  let answer=[];
  answer.push(arr[0]);
  for(let i=1; i<arr.length; i++){
    for(let j=0; j<answer.length; j++){
      if(arr[i]<answer[j]){
        answer.splice(j, 0, arr[i]);
        break;
      } 
    }
  }
  return answer;
}
let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));
*/


function solution(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    // 비교할 대상, j를 여기에서 선언
    let tmp = arr[i], j;
    for (j = i - 1; j >= 0; j--) {
      // 1일때 0
      // 2일때 1, 0
      // 3일때 2, 1, 0
      // 4일때 3, 2, 1, 0
      // 5일때 4, 3, 2, 1, 0
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = tmp;

  }
  return arr;
}
let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

// =========================

function solution(arr) {
  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let flag = false;

    for (let j = 0; j < result.length; j++) {
      // 해당 위치에 추가
      if (arr[i] < result[j]) {
        result.splice(j, 0, arr[i]);
        flag = true;
        break;
      }
    }
    // 끝까지 못 넣었으면 맨 뒤에 추가
    if (!flag) result.push(arr[i]);
  }

  return result;
}
let arr2 = [11, 7, 5, 6, 10, 9];
console.log(solution(arr2));

// ↑ 삽입할 위치를 찾고 그 자리에 삽입하는 방식, 위치를 못찾았을 경우 맨 뒤에 삽입.
// ↑ 정석은 아님. 보조 배열을 사용하는 삽입 정렬
// ↓ 정석의 삽입 정렬.

function solution(arr){
  for(let i = 1; i<arr.length; i++){
    let tmp = arr[i], j;
    for(j = i - 1; j >= 0; j--){
      if(arr[j] > tmp) arr[j+1]=arr[j];
      else break;
    }
    arr[j+1]=tmp;
  } 
  return arr;
}
let arr3=[11, 7, 5, 6, 10, 15, 9];
console.log(solution(arr3));

// 삽입정렬의 특징
// 1. 두 번째 원소부터 시작 (첫 번째는 이미 정렬되어 있음)
// 2. 현재 값을 정렬된 배열과 비교
// 3. 들어갈 자리에 삽입
// 그닥 효율적이진 않지만 데이터 개수가 적거나 이미 거의 정렬된 상태일 때 사용한다.
