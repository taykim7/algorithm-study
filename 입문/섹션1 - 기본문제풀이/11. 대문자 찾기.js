/* 
📝 대문자 찾기
한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
을 작성하세요.
▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
▣ 출력설명
첫 줄에 대문자의 개수를 출력한다.
▣ 입력예제 1 
KoreaTimeGood
▣ 출력예제 1
3

📝 강의 자료
(1) 원본과 toUpperCase 비교
function solution(s){         
  let answer=0;
  for(let x of s){
    if(x===x.toUpperCase()) answer++; 
  }
  return answer;
}
let str="KoreaTimeGood";
console.log(solution(str));

// (2) 아스키넘버로 확인하기
function solution(str) {
  let count = 0;
  for(let x of s){
    // 아스키넘버로 변환
    let num=x.charCodeAt();
    if(num>=65 && num<=90) answer++;
  }
  return count;
}
var str = 'KoreaTimeGood';
console.log(solution(str));
// 강의 쌤 말로는 대문자 아스키코드 65부터 시작하는거 알아두라는데 알아야할까? 의문
// 그니까 아스키코드로 변환하고 65부터 90사이면 대문자니까 찾는거 ㅇㅇ
*/

// (1) for of 로 하나씩 원본과 toUpperCase 비교하기
function solution(str) {
  let count = 0;
  for (let char of str) {
    // if (char === char.toUpperCase()) {
    //   count += 1;
    // }
    if (char === char.toUpperCase()) count++;
  }
  return count;
}
var str = 'KoreaTimeGood';
console.log(solution(str));
// 강의자료랑 똑같은데 강의자료처럼 if문을 더 짧게 바꿔봤음

// (2) 정규표현식 사용
function solution(str) {
  // 정규 표현식을 사용하여 대문자를 찾고, 그 개수를 반환
  return (str.match(/[A-Z]/g) || []).length;
}
const str = 'KoreaTimeGood';
console.log(solution(str));
// 별 어려운 방법을 다쓰네 증말
// * /[A-Z]/g는 대문자를 찾기 위한 정규 표현식

// ==========================

function fineUpperCase(str) {
  let result = str.match(/[A-Z]/g)
  return result.length
}
const str = 'KoreaTimeGood';
console.log(fineUpperCase(str));

// 풀이에 아스키코드로 변환하고 갯수 세는건 좀 오바아닌가?