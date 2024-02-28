/* 
📝 일곱 난쟁이
왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 
일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 
수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 
기억해 냈다.
아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시
오.
▣ 입력설명
아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 
아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
▣ 출력설명
입력된 순서대로 일곱 난쟁이의 키를 출력한다.
▣ 입력예제 1 
20 7 23 19 10 15 25 8 13
▣ 출력예제 1
20 7 23 19 10 8 13


📝 강의 자료 - reduce, 이중포문 활용
function solution(arr){
  let answer=arr;
  let sum=answer.reduce((a, b)=>a+b, 0);
  let flag = 0;
  for(let i=0; i<8; i++){
    for(let j=i+1; j<9; j++){
      if((sum-(answer[i]+answer[j]))==100){
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if(flag == 1) break;
  }
  return answer;
}
let arr=[22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

*/

// (1) 100 초과된 두 난쟁이 키 제거
function solution(arr) {
  let tot = 0;
  for (const item of arr) {
    tot += item
  }
  let over = tot - 100;
  for (var i = 0; i < arr.length - 1; i++) {
    if (over === arr[i] + arr[i + 1]) {
      arr.splice(i, 2);
    }
  }
  return arr;
}
var arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
// ❌ 틀림. 왜냐면 두 난쟁이 키가 연속되지 않을 수 있어서 ;;;; 나 바본가
// 애초에 배열에서 삭제할 때 splice로 하나씩 삭제하면 배열이 땡겨져서
// i부터 삭제하면 결과가 다르지 멍청ㅠ

// (2) reduce로 총합 구하기, 배열 일부 삭제하는 방법 변경
function solution(arr) {
  // reduce 활용하여 총합 구하기
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const over = sum - 100;
  const result = [];
  // 두 난쟁이의 키를 빼서 합이 초과한 값과 일치하는 경우를 찾아 제거
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === over) {
        // 일치하는 경우 해당 두 난쟁이의 키를 제외하고 결과에 추가
        for (let k = 0; k < arr.length; k++) {
          if (k !== i && k !== j) {
            // i랑 j 아닌 경우만 push
            result.push(arr[k]);
          }
        }
        return result; // 결과 반환
      }
    }
  }
  // 만약 일치하는 경우가 없다면 그대로 반환
  return arr;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// '가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.'
// 입력 예제에 따라 여러 답이 나올 수 있는데 아무거나 출력하면 되니까 아무거나 출력하면 된다.
// 즉, 두마리를 제외한 총 합이 100일때 그냥 return해서 나오면 된다.
// 문제 잘 읽자 ... 겁나 헷갈리게 하네 ㅠ
