/* 
📝 문자열 압축
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 
문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시
오. 단 반복횟수가 1인 경우 생략합니다.

▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
첫 줄에 압축된 문자열을 출력한다.

▣ 입력예제 1 
KKHSSSSSSSE

▣ 출력예제 1
K2HS7E

📝 강의 자료
function solution(s){
  let answer="";
  let cnt=1;
  // 맨 마지막 글자 검증을 위해 빈문자를 넣음 ***
  s=s+" ";
  for(let i=0; i<s.length-1; i++){
    // 현재와 다음이 같으면 +1
    if(s[i]===s[i+1]) cnt++;
    else{
      // 다르면 글자 가져오고 1이상일때 가져오고 1로 초기화
      answer+=s[i];
      if(cnt>1) answer+=String(cnt);
      cnt=1;
    }
  }
  return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));
*/

// (1) 
function solution(str) {

  let result = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    console.log(arr[i]);
    // 현재 글자와 다음 글자가 같으면 +1
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      // 다르면 push (= 달라질때마다 push됨)
      result.push(str[i]);
      // 1이상일 경우에만 반복해서 같은거니까 push
      if (1 < count) {
        result.push(count);
      }
      // 다시 1로 초기화
      count = 1;
    }
  }
  return result.join('');
}
let str="KKHSSSSSSSEE";
console.log(solution(str));

// 강의 자료랑 비슷하긴한데
// 강의 자료는 뒤에 빈 문자를 붙힘