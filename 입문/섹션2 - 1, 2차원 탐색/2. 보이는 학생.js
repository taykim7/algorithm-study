/* 
📝 보이는 학생
선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에
서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그
램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
▣ 입력설명
첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.
▣ 출력설명
선생님이 볼 수 있는 최대학생수를 출력한다.
▣ 입력예제 1 
8
130 135 148 140 145 150 150 153 
▣ 출력예제 1
5

📝 강의 자료 - 앞에 사람들 중 제일 큰 사람 값만 변수로 담고 비교
function solution(arr){         
  let answer=1, max=arr[0];
  for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
      answer++;
      max=arr[i];
    }
  }
  return answer;
}
let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
*/

// (1) 첫번째 데이터를 미리 넣어두고 하나씩 비교 후 저장
function solution(numArr) {
  let result = [];
  result.push(numArr[0]);
  for (const num of numArr) {
    if (result[result.length - 1] < num) {
      result.push(num);
    }
  }
  return result.length;
}
var numArr = [130, 135, 148, 140, 145, 150, 150, 153 ];
console.log(solution(numArr));

// (2) 스택 자료구조 활용
function solution(numArr) {
  let stack = [];
  let count = 0;
  for (let num of numArr) {
    // 스택이 비어있지 않고, 현재 학생의 키가 스택의 맨 위 학생보다 큰 경우
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      stack.pop(); // 스택에서 학생을 제거 (선생님이 볼 수 있는 학생)
      count++;    // 선생님이 볼 수 있는 학생의 수 증가
    }
    stack.push(height); // 현재 학생을 스택에 추가
  }
  return count;
}
const numArr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(numArr));