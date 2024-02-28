/* 
📝 가장 긴 문자열
N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 줄에 자연수 N이 주어진다.(3<=N<=30)
두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
각 문자열의 길이는 서로 다릅니다.

▣ 출력설명
첫 줄에 가장 긴 문자열을 출력한다.

▣ 입력예제 1 
5
teacher
time
student
beautiful
good

▣ 출력예제 1
beautiful

📝 강의 자료 - Number.MIN_SAFE_INTEGER 활용해서 비교
function solution(s){  
  let answer="", max=Number.MIN_SAFE_INTEGER;
  for(let x of s){
    if(x.length>max){
      max=x.length;
      answer=x;
    }
  }
  return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
// 문제랑 다르게 자연수는 그냥 무시하라고 하네 ㅡㅡ;
*/

// (1) 반복문으로 비교, 처음에 주어지는 자연수를 넘어서 비교를 못하도록 했다.
function solution(num, strArr) {
  let result = strArr[0];
  for (var i = 0; i < num - 1; i++) {
    if (strArr[i]) {
      if (result.length < strArr[i].length) {
        result = strArr[i];
      }
    }
  }
  return result;
}
var num = 5;
var strArr = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(num, strArr));
// 처음에 주어지는 자연수 갯수 중에 고르는 문제인 줄 알았음..

