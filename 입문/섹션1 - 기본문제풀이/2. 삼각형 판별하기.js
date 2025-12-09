/* 
📝 삼각형 판별하기
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
▣ 입력설명
첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
▣ 출력설명
첫 번째 줄에 “YES", "NO"를 출력한다.
▣ 입력예제 1 
6 7 11
▣ 출력예제 1
YES
▣ 입력예제 1 
13 33 17
▣ 출력예제 1
NO

📝 강의 자료
function solution(a, b, c){
  let answer="YES", max;
  let tot=a+b+c;
  if(a>b) max=a;
  else max=b;
  if(c>max) max=c;
  if(tot-max<=max) answer="NO"; 
  return answer;
}
*/

// * 삼각형이 되기 위해서는 가장 긴 변이 나머지 두 개 합친 것보다 작아야한다.

// (1) 단순하게 if로 분기처리하여 비교하는 방법
function solution(a, b, c){
  let answer;
  if (a > (b + c)) {
    answer = 'NO';
  } else if (b > (a + c)) {
    answer = 'NO';
  } else if (c > (a + b)) {
    answer = 'NO';
  } else answer = 'YES';
  return answer;
}
console.log(solution(13, 33, 17));
// 역시나 가독성이 많이 떨어지는 것 같다.
// 근데 위에 강의자료도 썩 좋아보이진 않는 듯..?

// (2) max 함수 활용
function solution(a, b, c) {
  let answer;
  let tot = a + b + c;
  let max = Math.max(a, b, c);
  if (max > (tot - max)) {
    answer = 'NO';
  } else answer = 'YES';
  return answer;
}
console.log(solution(13, 33, 17));
// 강의자료 참고하고 다르게 풀어봤다.
// 세 변의 길이를 모두 더한 값 중에 가장 긴 변을 뺀 값을 비교하면 될 듯

// ==================================

function isTriangle(a, b, c) {
  let tot = a + b + c;
  let max = Math.max(a, b, c);
  return max < tot-max ? 'YES' : 'NO';
}
console.log(isTriangle(6, 7, 11))