/* 
📝 A를 #으로
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 
프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 문자열이 입력된다.
▣ 출력설명
첫 번째 줄에 바뀐 단어를 출력한다.
▣ 입력예제 1 
BANANA
▣ 출력예제 1
B#N#N#

📝 강의 자료
(1) for of 활용. 문자열에 사용하면 문자 하나씩 반환.
function solution(s){
  let answer="";
  for(let x of s){
    if(x=='A') answer+='#';
    else answer+=x;
  }
  return answer;
}
let str="BANANA";
console.log(solution(str));

(2) replace 메서드 활용. 정규표현식 주의
function solution(s){
  let answer=s;
  // answer=answer.replace(/A/, "#"); => g를 안붙히면 전역이 아니라서 1개만 바뀐다
  answer=answer.replace(/A/g, "#");
  return answer;
}
let str="BANANA";
console.log(solution(str));
*/
// (1) 배열로 변환 후 splice로 A를 #으로 교환
function solution(str) {
  var arr = [...str];
  for (var i = 0; i < arr.length; i++) {
    arr[i] === 'A' ? arr.splice(i, 1, '#') : '';
  }
  return arr;
}
var str = 'BANANA';
console.log(solution(str));
// ❌ ... 아.. 문자로 반환을 했어야지.. 배열로 반환을 해버렸넹^^;

// (2) 문자열로 반환하도록 수정
function solution(str) {
  let result = '';
  for (let char of str) {
    if (char === 'A') {
      result += '#';
    } else result += char;
  }
  return result;
}
var str = 'BANANA';
console.log(solution(str));

// ====================

function changeAToShap(str) {
  let arr = [...str];
  
  // let result = '';
  // for (const key in arr) {
  //   arr[key] === 'A' ? result += '#' : result += arr[key];
  // }
  // return result;

  for (const key in arr) {
    arr[key] === 'A' ? arr.splice(key, 1, '#') : '';
  }
  return arr.join('');
}
var str = 'BANANA';
console.log(changeAToShap(str));

// 따로 result를 안만들고 splice로 변환해도 되긴하네