/* 
📝 중복문자제거
소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하
세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
▣ 입력설명
첫 줄에 문자열이 입력됩니다.
▣ 출력설명
첫 줄에 중복문자가 제거된 문자열을 출력합니다.
▣ 입력예제 1 
ksekkset
▣ 출력예제 1
kset

📝 강의 자료
(1) 해당 문자열의 길이만큼 반복문을 돌려서 해당 index에 해당하는 단어를 indexOf로 찾음.
function solution(s){  
let answer="";
for(let i=0; i<s.length; i++){
  if(s.indexOf(s[i])===i) answer+=s[i];
}
return answer;
}
console.log(solution("ksekkset"));
*/

// (1) 해당 문자열 문자 하나씩 indexOf로 찾고 없으면 추가
function solution(str) {
  let result = '';
  result += str[0];
  for (const char of str) {
    if (0 > result.indexOf(char)) {
      result += char;
    }
  }
  return result;
}
var str = 'ksekkset';
console.log(solution(str));
// 강의 자료랑 비슷하게 푼듯

// ===============================

function doubleCheck(str) {
  let result = ''
  for (const element of str) {
    if (result.indexOf(element) < 0) result += element;
  }
  return result;
}
var str = 'ksekkset';
console.log(doubleCheck(str));