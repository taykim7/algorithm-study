/* 
📝 멘토링
현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니
다. 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의
수학공부를 도와주는 것입니다.
선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서
모두 B학생보다 등수가 앞서야 합니다.
M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지
출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일
앞에서부터 1등, 2등, ...N등 순으로 표현된다.
만약 한 줄에 N=4이고, 테스트 결과가 3 1 4 2로 입력되었다면 3번 학생이 1등, 1번 학생이
2등, 4번 학생이 3등, 2번 학생이 4등을 의미합니다.

▣ 출력설명
첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력합니다.

▣ 입력예제 1
4 3
3 4 1 2
4 3 2 1
3 1 4 2

▣ 출력예제 1
3
(3, 1), (3, 2), (4, 2)와 같이 3가지 경우의 (멘토, 멘티) 짝을 만들 수 있다.


📝 강의 자료 - 4중 for문으로 계산
function solution(test){
  let answer=0;
  m=test.length;
  n=test[0].length;
  // 학생i
  for(let i=1; i<=n; i++){
  // 학생j
    for(let j=1; j<=n; j++){
      let cnt=0;
      // 모든 시험
      for(let k=0; k<m; k++){
        let pi=pj=0;
        // 각 시험
        for(let s=0; s<n; s++){
          // 두 학생의 index를 pi, pj에 저장
          if(test[k][s]===i) pi=s;
          if(test[k][s]===j) pj=s;
        }
        // pi의 index가 낮은 것이 등수가 높은 것
        if(pi<pj) cnt++;
      }
      // m은 시험 수
      // 즉 모든 시험의 등수가 높으면 +1
      if(cnt===m) answer++;
    }
  }
  return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));
*/

// 
function solution(arr) {
  // 학생들만 따로 저장
  let students = arr[0];
  let resultCount = 0;
  
  // 이중 for문으로 모든 경우의 수 탐색
  for (const studentA of students) {
    for (const studentB of students) {
      if (studentA === studentB) continue;
      let flag = true;
      // 모든 시험 탐색
      for (const testResult of arr) {
        // index를 통해 파악
        if (testResult.indexOf(studentA) > testResult.indexOf(studentB)) {
          flag = false;
          continue;
        }
      }
      if (flag) {
        resultCount += 1;
      }
    }
  }
  return resultCount;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));

// ========================

function solution(rank) {
  let result = 0;
  let studentCount = rank[0].length;
  let testCount = rank.length;

  // 모든 학생
  for (let i = 0; i < studentCount; i++) {
    let mento = rank[0][i];
    for (let j = 0; j < studentCount; j++) {
      let menti = rank[0][j];
      let canBeMenti = true;
      if (mento !== menti) {
        // 모든 시험
        for (let test = 1; test < testCount; test++) {
          let mentoIndex = rank[test].indexOf(mento)
          let mentiIndex = rank[test].indexOf(menti)
          if (mentoIndex > mentiIndex) {
            canBeMenti = false;
          }
        }
        if (canBeMenti) result++;
      }
    }
  }
  return result;
}
let arr2=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr2));

// ↑ 멘토 후보 전체 → 멘티 후보 전체 → 모든 시험에서 순위 비교하는 방법
// indexOf 때문에 계속 다시 탐색하기 때문에 비효율적!

function solution(rank) {
  let result = 0;
  let studentCount = rank[0].length;
  let testCount = rank.length;

  // 학생 번호 i (멘토)
  for (let i = 1; i <= studentCount; i++) {
    // 학생 번호 j (멘티)
    for (let j = 1; j <= studentCount; j++) {
      let canBeMenti = true;

      if (i !== j) {
        // 모든 시험
        for (let test = 0; test < testCount; test++) {
          // 멘토, 멘티 순위
          let mentoRank = 0;
          let mentiRank = 0;

          // 각 시험마다 멘토, 멘티의 순위 찾기
          for (let k = 0; k < studentCount; k++) {
            if (rank[test][k] === i) {
              mentoRank = k;
            } else if (rank[test][k] === j) {
              mentiRank = k;
            }
          }
          if (mentoRank > mentiRank) {
            canBeMenti = false;
            break; // 조기종료
          }
        }
        if (canBeMenti) result++;
      }

    }
    
  }
  return result;
}
let arr3=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr3));

// ↑ 문제 정의대로 학생 번호 기준으로 접근
// 멘토 후보 학생번호 전체 → 멘티 후보 학생번호 전체 → 모든 시험 → 각 시험마다 멘토멘티 순위 찾기