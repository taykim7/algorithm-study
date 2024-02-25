/* 
📝 대소문자 변환
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 
변환하여 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
▣ 출력설명
첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.
▣ 입력예제 1 
StuDY
▣ 출력예제 1
sTUdy

📝 강의 자료
function solution(s){  
  let answer="";
  for(let x of s){
    if(x===x.toUpperCase()) answer+=x.toLowerCase();
    else answer+=x.toUpperCase();
  }
  return answer;
}
*/

// (1) 아스키코드로 구분, 아스키코드로 대소문자 변환
function solution(str) {
  let result = '';
  for (let char of str) {
    let num = char.charCodeAt();
    // 소문자일 경우
    if (num >= 97 && num <= 122) {
      result += String.fromCharCode(num - 32);
    } else {
      result += String.fromCharCode(num + 32);
    }
  }
  return result;
}
var str = 'StuDY';
console.log(solution(str));

// (2) 아스키코드로 구분, 문자열 메서드로 대소문자 변환
function solution(str) {
  let result = '';
  for (let char of str) {
    let num = char.charCodeAt();
    // 대문자일 경우
    if (num >= 65 && num <= 90) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
var str = 'StuDY';
console.log(solution(str));
// 문자열 메서드를 사용하는게 훨씬 간단하고 직관적이라 더 나은 것 같다.

