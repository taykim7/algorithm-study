/* 
📝 회문 문자열
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력
하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.

▣ 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다. 

▣ 출력설명
첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

▣ 입력예제 1 
gooG

▣ 출력예제 1
YES


📝 강의 자료
==> 문자열을 뒤집는 대신 문자열을 순회하며 맨앞과 뒤를 비교하여
불필요한 문자열 복사와 비교 과정을 줄임

function solution(s){
  let answer="YES";
  s=s.toLowerCase();
  let len=s.length;
  // 길이의 절반까지 비교한다
  for(let i=0; i<Math.floor(len/2); i++){
    if(s[i]!=s[len-i-1]) return "NO";
  }
  return answer;
}

let str="goooG";
console.log(solution(str));
*/

// (1) 소문자로 변환 후 배열 메서드 reverse, 배열끼리 비교를 위해 JSON.stringify를 활용해서 비교
function solution(str) {
  let result = 'NO';
  let arr = [...str.toLowerCase()];
  let revArr = [...arr.reverse()];
  if (JSON.stringify(arr) === JSON.stringify(revArr)) result = 'YES'; 
  return result;
}
let str = 'gooG';
console.log(solution(str));

// =================================

function solution(str) {
  let result = 'NO'
  let strArr = [...str.toLowerCase()];
  let revStrArr = [...strArr];
  revStrArr.reverse();
  if (JSON.stringify(strArr) === JSON.stringify(revStrArr)) result = 'YES'; 
  return result;
}
let str2 = 'gooGz';
console.log(solution(str2));

// ----------------------

function solution(str) {
  let result = 'YES'
  let strArr = [...str.toLowerCase()];
  let strArrlength = strArr.length;
  for (let i = 0; i < strArrlength / 2; i++) {
    if (strArr[i] !== strArr[strArrlength - i - 1]) result = 'NO'
  }
  return result;
}
let str3 = 'gooG';
console.log(solution(str3));

// ↑ 두번째 방식이 정답에 유사한거라고 한다.
// 첫번째 방식보다 시간복잡도, 공간복잡도에서 유리하다고함
// 첫번째 방식은 배열 2개 생성하고 문자열 직렬화까지 수행하며 불필요한 메모리를 사용한다고 함.