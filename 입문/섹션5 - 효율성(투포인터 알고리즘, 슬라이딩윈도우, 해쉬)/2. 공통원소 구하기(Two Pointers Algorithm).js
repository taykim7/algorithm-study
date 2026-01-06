/* 
📝 공통원소 구하기
A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
각 집합의 원소는 1,000,000,000이하의 자연수입니다.

▣ 출력설명
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

▣ 입력예제 1 
5
1 3 9 5 2
5
3 2 5 7 8

▣ 출력예제 1
2 3 5

📝 강의 자료 - 투포인터 알고리즘
function solution(arr1, arr2){
  let answer=[];

  // 일단 정렬
  arr1.sort((a, b)=>a-b);
  arr2.sort((a, b)=>a-b);

  // 투포인터
  let p1=p2=0;
  while(p1<arr1.length && p2<arr2.length){
  // 같으면 push
    if(arr1[p1]==arr2[p2]){
      answer.push(arr1[p1++]);
      p2++;
    }
    // 같지 않은데 작은쪽 +1
    else if(arr1[p1]<arr2[p2]) p1++;
    // 다른쪽 +1
    else p2++;
  }              
  return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));
*/

// (1) 전에 배운 Set 자료구조를 활용했다. 강의자료와 비슷한 것 같다.
function solution(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)

  // ***포인터 변수 p1, p2
  let p1 = 0, p2 = 0;

  let tmp = new Set(); 

  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) p1++;
    else if (arr1[p1] > arr2[p2]) p2++;
    else tmp.add(arr1[p1++]);
  }
  
  // Set을 배열화
  let result = Array.from(tmp).sort((a, b)=>a - b);
  return result;
}
let arr1=[1, 3, 9, 5, 2];
let arr2=[3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));

// ========================

function solution(arr1, arr2) {
  let result = [];
  // 투포인터
  let p1 = 0;
  let p2 = 0;
  // 정렬
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      // 우측이 크면 작은 좌측을 ++
      p1++;
    } else if (arr1[p1] === arr2[p2]) {
      // 같을경우 push하고 두 포인트 모두 ++
      result.push(arr2[p2]);
      p1++;
      p2++;
    } else {
      // 좌측이 크면 작은 우측을 ++
      p2++;
    }
  }
  return result;
}
let numArr1=[1, 3, 9, 5, 2];
let numArr2=[3, 2, 5, 7, 8];
console.log(solution(numArr1, numArr2));
