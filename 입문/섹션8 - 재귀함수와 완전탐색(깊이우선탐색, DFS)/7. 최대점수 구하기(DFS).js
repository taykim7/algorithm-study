/* 
📝 최대점수 구하기(DFS)
이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
(해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

▣ 입력설명
첫 번째 줄에 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어집니다. 
두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.

▣ 출력설명
첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다.

▣ 입력예제 1 
5 20
10 5
25 12
15 8
6 3
7 4

▣ 출력예제 1
41

📝 강의 자료
function solution(m, ps, pt){         
  let answer=Number.MIN_SAFE_INTEGER;
  let n=ps.length;
  function DFS(L, sum, time){
    if(time>m) return;
    if(L===n){
      answer=Math.max(answer, sum);
    }
    else{
      DFS(L+1, sum+ps[L], time+pt[L]);
      DFS(L+1, sum, time);
    }   
  }

  DFS(0, 0, 0);
  return answer;
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));
*/

// 진짜 감이 오는 듯 ... 
function solution(limit, arr) { 
  let highScore = 0;

  //-------------------------------
  function DFS(k, score, time) {
    if (time > limit) return;
    // 맨 밑에 도착할 시 검사
    if (k === arr.length) {
      // 시간이 제한시간보다 작고, 점수가 제일 높을때만 저장
      if (time <= limit && score > highScore) {
        highScore = score;
      }
    }

    else {
      // 왼쪽 자식 (더한다)
      DFS(k + 1, score + arr[k][0], time + arr[k][1]);
      // 오른쪽 자식 (더하지않는다)
      DFS(k + 1, score, time);
    }
  }
  //-------------------------------

  // 시작
  DFS(0, 0, 0);
  return highScore;
}

// 나는 배열로 풀었따
let scoreTime = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
solution(20, scoreTime);
