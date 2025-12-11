/* 
📝 최솟값 구하기
7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 7개의 수가 주어진다.
▣ 출력설명
첫 번째 줄에 가장 작은 값을 출력한다.
▣ 입력예제 1 
5 3 7 11 2 15 17
▣ 출력예제 1
2

📝 강의 자료
function solution(arr){
  let answer, min=Number.MAX_SAFE_INTEGER;
  for(let i=0; i<arr.length; i++){
    if(arr[i]<min) min=arr[i];
  }
  answer=min;
  return answer;
}
let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

📝 강의 자료2 - min.apply 활용
function solution(arr){
  let answer = Math.min.apply(null, arr);
  return answer;
}
let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
*/

//-------------------------------

// (1) 문자열로 받았을 경우 split으로 분리 후 반복문으로 찾기
function solution(n){
  let arr = n.split(' ');
  //전부 number타입으로 변환
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  // 크기 비교
  let answer = arr[0];
  for (var i = 0; i < arr.length - 1; i++) {
    if (answer > arr[i]) {
      answer = arr[i]
    }
  }
  return answer
}
console.log(solution('5 3 7 11 2 15 17'));
// 너무 복잡하네

//-------------------------------

// (2) 문자열로 받았을 경우 split으로 분리 후 map과 스프레드 활용
function solution(n) {
  // 문자열을 숫자 배열로 변환
  let arr = n.split(' ').map(Number);
  // 스프레드 문법 활용
  return Math.min(...arr);
}
console.log(solution('5 3 7 11 2 15 17'));
// min 은 생각했지만 스프레드 문법을 뒤늦게 생각해냄

// 근데 강의 자료를 보니까 애초에 입력을 문자 배열로 입력하더라 ...
// 따로 말이 없어서 당연히 문자열인줄 ^^;
// 괜히 오바해서 풀었네

// 강의 자료는 Number.MAX_SAFE_INTEGER 로 큰 값으로 미리 세팅하는데 이렇게까지 해야하나 싶다 ...
// (진짜 몰라서ㅠ)

// ============================

function solution(arr) {
  let min = Number.MAX_VALUE;
  for (const element of arr) {
    if (element < min) {
      min = element
    }
  }
  return min;
}
console.log(solution([5, 7, 1, 3, 2, 9, 11]))

// 아 그냥 Math.min 쓰면 됐구나!