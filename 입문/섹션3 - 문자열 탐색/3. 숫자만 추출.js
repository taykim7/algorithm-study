/* 
📝 숫자만 추출
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만
듭니다. 
만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205
이 됩니다. 
추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

▣ 입력설명
첫 줄에 숫자가 섞인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.

▣ 출력설명
첫 줄에 자연수를 출력합니다.

▣ 입력예제 1 
g0en2T0s8eSoft

▣ 출력예제 1
208

📝 강의 자료 - inNaN 으로 숫자 거르고 parseInt로 변환
function solution(str){
  let answer="";
  for(let x of str){
    if(!isNaN(x)) answer+=x;
  }  
  return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));
*/

// (1) 숫자 정규식으로 숫자 확인, Number함수로 숫자 변환
function solution(str) {
  let result = '';
  let regx = /\d/
  for (const cha of str) {
    if (regx.test(cha)) {
      result += cha;
    }
  }
  return Number(result);
}
let str="g0en2T0s8eSoft";
console.log(solution(str));

// ========================

function solution(str) {
  let result = '';
  for (const element of str) {
    if (!isNaN(element)) result += element;
  }
  return Number(result);
}
let str2="g0en2T0s8eSoft";
console.log(solution(str2));

// -----------------------

function solution(str) {
  return Number(str.replace(/[^0-9]/g, ''));
}
let str3="g0en2T0s8eSoft";
console.log(solution(str3));

// ↑ 전체 문자열에서 숫자만 추출하는 방식 
// 정규화를 활용하는게 더 안정적이다.