/* 
📝 가운데 문자 출력
소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세
요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
▣ 출력설명
첫 줄에 가운데 문자를 출력합니다.
▣ 입력예제 1 
study
▣ 출력예제 1
u
▣ 입력예제 2 
good
▣ 출력예제 2
oo


📝 강의 자료 - 길이를 나눈 값을 내림(floor)하여 구함.
구한 값으로 분기처리해서 index도 구함.
function solution(s){  
  let answer;
  let mid=Math.floor(s.length/2)
  if(s.length%2===1) answer=s.substring(mid, mid+1);
  else answer=s.substring(mid-1, mid+1);
  return answer;
}
console.log(solution("study"));
*/

// (1) 나머지값으로 짝수, 홀수 구분
// 홀수일땐 나눈 값 버림(trunc)으로 index 구하고
// 짝수일땐 나눈 값으로 index 구함
function solution(str) {
  // 0:짝수, 1:홀수
  let rest = str.length % 2; 
  if (0 < rest) {
    // trunc 소수점 버리기
    return str[Math.trunc(str.length / 2)];
  } else {
    return str.substring((str.length/2)-1, (str.length/2)+1)
  }
  return result;
}
var str = 'good';
console.log(solution(str));
