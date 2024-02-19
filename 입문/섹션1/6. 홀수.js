/* 
📝 홀수
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 
중 최소값을 찾는 프로그램을 작성하세요.
예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
이들 중 홀수는 77, 41, 53, 85이므로 그 합은
77 + 41 + 53 + 85 = 256
이 되고,
41 < 53 < 77 < 85
이므로 홀수들 중 최소값은 41이 된다.
▣ 입력설명
첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 
반드시 존재한다.
▣ 출력설명
첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
▣ 입력예제 1 
12 77 38 41 53 92 85
▣ 출력예제 1
256
41

📝 강의 자료
function solution(arr){
  let answer=[];
  let sum=0, min=1000;
  for(let x of arr){
    if(x%2===1){
      sum+=x;
      if(x<min) min=x;
    }
  }
  answer.push(sum);
  answer.push(min);     
  return answer;
}
arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
*/

//-------------------------------

// (1) 홀수를 찾고 배열로 만든 후 홀수 배열 중에서 합, 최소값 구하기
function solution(arr) {
  let oddArr = [];
  let answer = 0;
  // 홀수 찾기
  for (var i = 0; i < arr.length; i++) {
    if (0 !== arr[i] && 0 !== (arr[i] % 2)) {
      oddArr.push(arr[i]);
    }
  }
  // 홀수들 중에서 합, 최소값 구하기
  for (var i = 0; i < oddArr.length; i++) {
    answer += oddArr[i];
  }
  // 배열로 리턴
  return [answer, Math.min(...oddArr)];
}
var allArr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(allArr));

//-------------------------------

// (2) for of, Infinity 활용
function solution(arr) {
  let sum = 0;
  // 최소값을 찾기 위해 초기값을 Infinity로 설정
  let minOdd = Infinity; 
  // for of 활용하여 홀수 찾기
  for (let num of arr) {
    if (num % 2 !== 0) { 
      // 홀수라면 바로 합, 최소값 구하기
      sum += num;
      if (num < minOdd) {
        minOdd = num;
      }
    }
  }
  return [sum, minOdd !== Infinity ? minOdd : "홀수가 없습니다."];
}

var allArr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(allArr));