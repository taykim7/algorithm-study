/* 
📝 K번째 큰 수
현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다.
같은 숫자의 카드가 여러장 있을 수 있습니다.
현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 "합한 값"을 기록하려고 합니다.

3장을 뽑을 수 있는 모든 경우를 기록합니다.

기록한 값 중 K번째로 큰 수를 출력하는 프로그램을 작성하세요.
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고,
K값이 3이라면 K번째 큰 값은 22입니다.

▣ 입력설명
첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고,
그 다음 줄에 N개의 카드값이 입력된다.

▣ 출력설명
첫 줄에 K번째 수를 출력합니다. K번째 수가 존재하지 않으면 -1를 출력합니다.

▣ 입력예제 1
10 3
13 15 34 23 45 65 33 11 26 42

▣ 출력예제 1
143

📝 강의 자료 - Set을 활용

i+1, j+1로 더 간단하게 서로 같은 항목 제외

Set : 중복을 제거할 수 있는 자료구조
Set을 활용해서 중복을 제거함;
단, set은 sort가 안되기 때문에
Array.from을 활용하여 배열화하였다.

function solution(n, k, card){
  let answer;
  let tmp = new Set();
  for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
      for(let k=j+1; k<n; k++){
        // set에 add만 해도 중복은 제외해준다.
        tmp.add(card[i]+card[j]+card[k]);
      }
    }
  }
  // Set을 배열화
  let a=Array.from(tmp).sort((a, b)=>b-a);
  answer=a[k-1];
  return answer;
}
let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
*/

// (1) filter, indexOf로 중복 제거 ==> Set이 더 낫다.
function solution(n, k, arr) {
  let result = [];
  // 첫 번째 수
  for (let a = 0; a < n; a++) {
    // 두 번째 수
    for (let b = 0; b < n; b++) {
      // 세 번째 수
      for (let c = 0; c < n; c++) {
        // 만약 서로가 같다면 패스
        if (c === a || c === b || b === a) {
          continue;
        }
        // 세 개를 더한 값을 배열로 push
        result.push(arr[c]+arr[b]+arr[a]);
      }
    }
  }
  // filter와 indexOf를 활용하여 중복된 수를 제거해 준 후
  // sort로 정렬을 하고
  // k번째 수를 찾는다.
  return result.filter((item, index) => {
    return result.indexOf(item) === index;
  }).sort((a, b) => b - a)[k-1];
}
let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
