/* 
📝 등수구하기
N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 
프로그램을 작성하세요.

▣ 입력설명
첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력
된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 
92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

▣ 출력설명
입력된 순서대로 등수를 출력한다.

▣ 입력예제 1 
5
87 89 92 100 76

▣ 출력예제 1
4 3 2 1 5


📝 강의 자료
- 길이만으로 배열 생성하는게 인상깊음
- Array.from() 새로운 배열을 생성
  Array.from({ length: 5 }, (v, i) => i);
  // [0, 1, 2, 3, 4]
  // v는 undefined

function solution(arr){  
  let n=arr.length;
  let answer=Array.from({length:n}, () => 1);
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(arr[j]>arr[i]) answer[i]++;
    }
  }             
  return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));
*/

// (1) sort로 정렬 후 indexOf+1 로 등수 찾기.
// - sort로 인해 같은 점수인 학생 처리도 가능
function solution(korArr) {
  var rank = [...korArr];
  var result = [];

  rank.sort((a, b) => {
    return b - a;
  })

  for (const kor of korArr) {
    result.push(rank.indexOf(kor)+1);
  }

  return result;
}
var korArr = [87, 89, 92, 100, 76];
console.log(solution(korArr));

// ==========================

function solution(arr) {
  let n = arr.length;
  let rankArr = Array.from({length : n}, () => 0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] <= arr[j]) {
        rankArr[i] += 1;
      }
    }
  }
  return rankArr;
}

var korArr = [87, 89, 92, 100, 76, 76];
console.log(solution(korArr)); // 4 3 2 1 6 6

// ↑ 성능적으론 별로인듯

function solution(arr) {
  // 순위
  let rank = 1;

  // 순서대로 정렬
  const sorted = [...arr].sort((a, b) => b - a);

  // Map 객체 생성
  const rankMap = new Map();

  // 등수 구하기
  for (let i = 0; i < sorted.length; i++) {
    // 중복되지 않은 점수만 순위와 함께 등록
    if (!rankMap.has(sorted[i])) {
      rankMap.set(sorted[i], rank);
    }
    // 중복될 경우 순위만 +1
    // ※ 동점 처리를 높은 점수 or 낮은 점수는 rank++ 위치에 따라 달라짐
    rank++;
  }

  console.log(rankMap)

  // 점수별로 순회하며 등수 가져오기
  return arr.map(score => rankMap.get(score));
}
var korArr = [87, 89, 92, 100, 76, 76, 70];
console.log(solution(korArr)); // 4 3 2 1 5 5 7

// ↑ sort 활용