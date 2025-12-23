/* 
📝 큰 수 출력하기
N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작
성하세요.(첫 번째 수는 무조건 출력한다)
▣ 입력설명
첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
▣ 출력설명
자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
▣ 입력예제 1 
7 3 9 5 6 12
▣ 출력예제 1
7 9 6 12

📝 강의 자료
function solution(arr){         
  let answer=[];
  answer.push(arr[0]);
  for(let i=1; i<arr.length; i++){
    if(arr[i]>arr[i-1]) answer.push(arr[i]);
  }
  return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));
*/

// (1) for 문 활용 이 전 인덱스와 비교
function solution(numArr) {
  let result = [];
  result.push(numArr[0]);
  for (var i = 1; i < numArr.length; i++){
    if (numArr[i] > numArr[i - 1]) {
      result.push(numArr[i])
    }
  }
  return result;
}
var numArr = [7, 3, 9, 5, 6, 12];
console.log(solution(numArr));

// =====================================

function solution(arr) {
  let result = [];
  result.push(arr[0]);

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > arr[i-1]) result.push(arr[i]);
  }
  return result;
}

var arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));