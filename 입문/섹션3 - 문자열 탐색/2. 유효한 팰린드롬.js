/* 
📝 유효한 팰린드롬
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 
작성하세요.
단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
알파벳 이외의 문자들의 무시합니다.

▣ 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다. 

▣ 출력설명
첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

▣ 입력예제 1 
found7, time: study; Yduts; emit, 7Dnuof

▣ 출력예제 1
YES



📝 강의 자료 - 이 전과 똑같은 문제지만 기호가 있음.
여기는 정규식으로 replace로 변환해서 사용
그리고 split으로 배열로 변환 후
reverse하고 다시 join으로 스트링으로 변환.
그리고 스트링끼리 비교

function solution(s){
  let answer="YES";
  s=s.toLowerCase().replace(/[^a-z]/g, '');
  if(s.split('').reverse().join('')!==s) return "NO";
  return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
*/

// (1) 정규식 활용해서 test로 걸러내고 이 전 문제랑 똑같이 비교.
function solution(str) {
  let arr = [];
  let regx = /^[a-zA-Z]*$/

  for (const cha of str) {
    if (regx.test(cha)) {
      arr.push(cha.toLowerCase());
    }
  }
  let length = arr.length;
  
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[length - i - 1]) {
      return 'NO';
    }
  }

  return 'YES';
}
let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

// ====================================

function solution(str) {
  let simpleStr = str.toLowerCase().replace(/[^a-z]/g, ''); // 알파벳 외 무시
  for (let i = 0; i < simpleStr.length / 2; i++) {
    if (simpleStr[i] !== simpleStr[simpleStr.length - i - 1]) return 'NO'
  }
  return 'YES'
}
let str2="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str2));