/* 
📝 가위 바위 보
A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, 
B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
예를 들어 N=5이면

회수 1 2 3 4 5
A의 정보 2 3 3 1 3
B의 정보 1 1 2 2 3
승자 A B A B D

두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램
을 작성하세요.

▣ 입력설명
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.

▣ 출력설명
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

▣ 입력예제 1 
5
2 3 3 1 3
1 1 2 2 3

▣ 출력예제 1
A
B
A
B
D

📝 강의 자료 - 이런걸 풀 때는 기준을 잘 잡는게 중요하다고 한다.
function solution(a, b){         
  let answer="";
  for(let i=0; i<a.length; i++){
    if(a[i]===b[i]) answer+="D ";
    else if(a[i]===1 && b[i]===3) answer+="A ";
    else if(a[i]===2 && b[i]===1) answer+="A ";
    else if(a[i]===3 && b[i]===2) answer+="A ";
    else answer+="B ";
  }
  return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
*/

// (1) switch를 활용해서 비교를 하는 rcpResult 함수 추가 - switch가 더 보기 안좋은 것 같다...
function solution(rcpA, rcpB) {
  let gameCount = rcpA.length;
  let gameResult = [];
  for (var i = 0; i < gameCount; i++){
    gameResult.push(rcpResult(rcpA[i], rcpB[i]));
  }
  return gameResult;
}

// 가위바위보
function rcpResult(a, b) {
  switch (a) {
    case 1: if (b === 1) {
      return 'D';
    } else if (b === 2) {
      return 'B';
    } else return 'A'
      
    case 2: if (b === 1) {
      return 'A';
    } else if (b === 2) {
      return 'D';
    } else return 'B'
      
    case 3: if (b === 1) {
      return 'B';
    } else if (b === 2) {
      return 'A';
    } else return 'D'
  }
}
var rcpA = [2, 3, 3, 1, 3];
var rcpB = [1, 1, 2, 2, 3];

console.log(solution(rcpA, rcpB));
// → 가위, 바위, 보를 숫자로 비교를 해서 더 혼동이 되는 것 같다.

// (2) if문으로 더 보기좋게(?) 계산
function solution(rcpA, rcpB) {
  const gameCount = rcpA.length;
  const gameResult = [];
  for (let i = 0; i < gameCount; i++) {
    gameResult.push(rcpResult(rcpA[i], rcpB[i]));
  }
  return gameResult;
}

// 가위바위보
function rcpResult(a, b) {
  if (a === b) return 'D';
  if ((a === '가위' && b === '보') || (a === '바위' && b === '가위') || (a === '보' && b === '바위')) {
    return 'A';
  } else {
    return 'B';
  }
}

const rcpA = ['바위', '보', '보', '가위', '보'];
const rcpB = ['가위', '가위', '바위', '바위', '보'];
console.log(solution(rcpA, rcpB));
// → 근데 애초에 문제가 숫자로 풀게했는데 한글로 해도 되나?