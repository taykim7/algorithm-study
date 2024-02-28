/* 
📝 세 수 중 최솟값
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하
세요.(정렬을 사용하면 안됩니다)

▣ 입력설명
첫 번째 줄에 100이하의 세 자연수가 입력된다.

▣ 출력설명
첫 번째 줄에 가장 작은 수를 출력한다.

▣ 입력예제 1 
6 5 11

▣ 출력예제 1
5

📝 강의 자료
function solution(a, b, c){
  let answer;
  if(a<b) answer=a;
  else answer=b;
  if(c<answer) answer=c; 
  return answer;
}
*/

// (1) 삼항연산자 활용하는 방법
function solution(a, b, c){
  let answer;
  a < b ? (a < c ? answer = a : answer = c) : (b < c ? answer = b : answer = c);
  return answer;
}
console.log(solution(6, 5, 11)); // 5
// 정확히 동작은 하지만 가독성, 유지보수성은 구린 듯
// 차라리 if문으로 명확하게 작성하는 게 좋을 것 같다.

// (2) Math 함수 활용하는 방법
function solution(a, b, c){
  return Math.min(a, b, c);
}
console.log(solution(6, 5, 11)); // 5
// 그냥 Math 함수로 완전 쉽게도 가능한 듯
