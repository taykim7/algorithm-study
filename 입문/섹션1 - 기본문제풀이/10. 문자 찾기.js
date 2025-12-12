/* 
📝 문자 찾기
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 
존재하는지 알아내는 프로그램을 작성하세요.
문자열의 길이는 100을 넘지 않습니다.
▣ 입력설명
첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다. 
▣ 출력설명
첫 줄에 해당 문자의 개수를 출력한다.
▣ 입력예제 1 
COMPUTERPROGRAMMING
R
▣ 출력예제 1
3

📝 강의 자료
(1) 그냥 for of 활용
function solution(s, t){
  let answer=0;
  for(let x of s){
    if(x===t) answer++;
  }
  return answer;
}
let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

(2) split 활용해서 배열 길이로 찾기;;; (이렇게 계산해도 되나 존나 못알아볼것같은데)
function solution(s, t){
  let answer=s.split(t).length;
  return answer-1;
}
let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
*/

// (1) 대소문자 구분은 안함. 하란 말 없었잖아 ^^
function solution(str1, str2) {
  let count = 0;
  for (let char of str1) {
    str2 === char ? count += 1 : '';
  }
  return count;
}
var str1 = 'COMPUTERPROGRAMMING';
var str2 = 'R';
console.log(solution(str1, str2));

// ================================

function solution(target, str) {
  let targetArr = [...target];
  let result = targetArr.filter((el) => {
    return el.toUpperCase() === str.toUpperCase();
  })
  return result.length
}
var str1 = 'COMPUTERPROGRAMMING';
var str2 = 'r';
console.log(solution(str1, str2));

// 대소문자 구분 급하게 추가^^;