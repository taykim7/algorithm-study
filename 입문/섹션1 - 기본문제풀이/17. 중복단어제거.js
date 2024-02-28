/* 
📝 중복단어제거
N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
출력하는 문자열은 원래의 입력순서를 유지합니다.
▣ 입력설명
첫 줄에 자연수 N이 주어진다.(3<=N<=30)
두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
▣ 출력설명
첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
▣ 입력예제 1 
5
good
time
good
time
student
▣ 출력예제 1
good
time
student

📝 강의 자료 -  고차 함수를 활용한 방식 (filter를 활용)

- 고차함수인 filter는 함수를 전달받음
- filter는 배열을 순회하고 각 요소에 주어진 함수를 호출
- 해당 함수가 true를 반환하는 요소들로 새로운 배열 생성.
- filter 콜백 함수 두 개의 인수는 각각의 요소와 인덱스.

- 배열에서 각 문자의 indexOf는 해당되는 단어 중 가장 앞에 있는 단어의 index를 가져옴
- 그리고 각각의 index를 비교해서 일치하는 값
- 즉, 중복된 단어 중 앞쪽 index에 위치한 단어들만 filter된다.

function solution(s){  
  let answer;
  answer=s.filter(function(item, index){
    return s.indexOf(item)===index;
  });
  return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));

*/

// (1) 해당 배열 문자 하나씩 indexOf로 찾고 없으면 추가
function solution(strArr) {
  let result = [];
  result.push(strArr[0]);
  for (const str of strArr) {
    if (0 > result.indexOf(str)) {
      result.push(str);
    }
  }
  return result;
}
var strArr = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(strArr));
// 중복 문자 찾는 과정과 동일하게 indexOf로 진행하였다.
// 하지만 해당 indexOf 배열을 순회하면서 해당 요소를 찾기 때문에 성능적으로 비효율적이라고 한다.
// 중복 검사를 할 때 각 문자열에 대해 전체 결과 배열을 탐색하는 거라
// 시간 복잡도가 O(N^2) 라고하는데 이건 뭔지 모르겠다. 아무튼 비효율적
// 아무튼 효율적으로 해결하기 위해 Set을 활요하자

// (2) Set 객체와 set의 찾는 메서드인 has 활용
function solution(strArr) {
  let result = [];
  let seen = new Set(); // 이미 등장한 문자열을 기록하기 위한 Set
  for (const str of strArr) {
    if (!seen.has(str)) { // 이미 등장한 문자열이 아닌 경우에만 결과 배열에 추가
      result.push(str);
      seen.add(str); // 현재 문자열을 이미 등장한 문자열로 기록
    }
  }
  return result;
}
var strArr = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(strArr));
// has() 메서드는 Set 객체에 주어진 요소가 존재하는지 여부를 판별해 반환.
