/* 
📝 자릿수의 합

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 10,000,000를 넘지 않는다.

▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.

▣ 입력예제 1
7
128 460 603 40 521 137 123

▣ 출력예제 1
137


📝 강의 자료 - 계산으로 자릿수를 구함 .. 개신기해 ㅠ

function solution(n, arr){
  let answer, max=Number.MIN_SAFE_INTEGER;
  // 배열 전체 탐색
  for(let x of arr){
    let sum=0, tmp=x;
    // tmp가 0될때까지 반복 ... 대박이다
    while(tmp){
      // 10으로 나눈 나머지 + 버림 = 1 의 자리수 ;;;; 신기해
      sum+=(tmp%10);
      tmp=Math.floor(tmp/10);
    }
    // sum은 자릿수 합계
    if(sum>max){
      max=sum;
      answer=x;
    }
    else if(sum===max){
      if(x>answer) answer=x;
    }
  }
  return answer;
}
let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
*/

// (1) 
function solution(numArr) {
  let result = 0;
  let totMax = 0;
  let tot = 0;

  // 배열 전체 탐색
  for (let i = 0; i < numArr.length; i++){
    // 현재 숫자 string 변환
    let strNum = numArr[i].toString();
    // 자릿수 합계 초기화
    tot = 0;
    // 자릿수 합계 구하기
    for (const n of strNum) {
      tot += Number(n);
    }
    // 가장 큰 자릿수 합계와 비교
    if (totMax < tot) {
      // 현재 숫자의 자릿수가 크다면
      // 자릿수합계, 현재 숫자 저장
      totMax = tot;
      result = numArr[i];
      // 만약 자릿수의 합계가 같다면
    } else if (totMax === tot) {
      // 저장된 숫자와 비교
      if (result < numArr[i]) {
        totMax = tot;
        result = numArr[i]
      } 
    }

  }
  return result;
}
let numArr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(numArr));

// (2) reduce 활용
function solution(arr){
  let answer, max=Number.MIN_SAFE_INTEGER;
  // 배열 전체 탐색
  for (let x of arr) {
    // ***간단?히 한 줄로 자릿수의 합 구하기
    // 1. 하나씩 문자열 + 배열로 바꿈 (toString와 split 활용)
    // 2. reduce를 통해 배열 각 요소를 실행.
    // a는 누산기, b는 현재값, 0은 처음 값
    // 즉, 맨 처음 0인 a에 b가 누적되서 반환함.
    let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
    // 여기부터는 똑같음
    if(sum>max){
      max=sum;
      answer=x;
    }
    else if(sum===max){
      if(x>answer) answer=x;
    }
  }
  return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));