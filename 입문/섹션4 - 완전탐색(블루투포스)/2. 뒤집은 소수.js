/* 
📝 뒤집은 소수
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하
는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출
력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 100,000를 넘지 않는다.

▣ 출력설명
첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.

▣ 입력예제 1
9
32 55 62 20 250 370 200 30 100

▣ 출력예제 1
23 2 73 2 3


📝 강의 자료 - 소수판별함수에서 제곱근 활용. 숫자만으로 자릿수 바꾸기

function solution(arr){
  let answer=[];
  for(let x of arr){
    let res=0;
    // 숫자 만으로 뒤집기
    // while이라 끝까지 반복
    // t는 x의 1의자리 수, res는 1의 자리수
    // x를 10으로 나눠서 10의 자리수까지만 저장
    // 다시 처음으로..
    // x의 1의 자리 구하고
    // res*10하면 1의자리수가 10의자리수로 됨
    // x의 10의자리수만 또 저장 ..
    // 이되면 자리수가 다 바뀜
    while(x){
      let t=x%10;
      res=res*10+t;
      x=parseInt(x/10);
      // 순회1: x가 370, t가 0, res가 0, x가 37
      // 순회2: x가 37, t가 7, res가 7, x가 3
      // 순회3: x가 3, t가 3, res가 73, x가 0 끝
    }
    if(isPrime(res)) answer.push(res);
  }
  return answer;
}

// 소수 판별 함수
function isPrime(num){
  // 1이면 그냥 제외 (1은 소수가 아님)
  if(num===1) return false;
  // 2부터 num의 -1까지 나누고 0이 되면 제외
  // 여기서는 aqrt(제곱근)을 활용
  // 제곱근이 뭐지 ㅠ... (어떤 수의 제곱근은 제곱하여 그 수가 되는 모든 수이다. )
  // 절반 이후엔 어짜피 반복이라 제곱근까지만 나눠도 되서 제곱근을 활용하는 것. ..
  // 9의 제곱근은 3 x 3 이니까 3 ...
  for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
    if(num%i===0) return false;
  }
  return true;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
*/

// (1) 그냥 뭐 문자열로 바꾸고 배열로 바꾸고 리버스하고 합쳐서 구함
function solution(numArr) {
  let result = [];
  for (let num of numArr) {
    let sum = Number(num.toString().split('').reverse().join(''));
    let flag = true;
    for (let i = 2; i < sum; i++) {
      if (sum % i === 0) flag = false;
    }
    if(sum!==1 && flag) result.push(sum)
  }
  return result;
}

let numArr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(numArr));
