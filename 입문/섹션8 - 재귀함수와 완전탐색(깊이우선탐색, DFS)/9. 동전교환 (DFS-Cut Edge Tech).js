/* 
📝 동전교환 (DFS-Cut Edge Tech)
다음과 같이 여러 단위의 동전들이 주어져 있을때
거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가?
각 단위의 동전은 무한정 쓸 수 있다.

▣ 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다.
두 번째 줄에는 N개의 동전의 종류가 주어지고,
그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다. 
각 동전의 종류는 100원을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.

▣ 입력예제 1 
3
1 2 5
15

▣ 출력예제 1
3

설명 : 5 5 5 동전 3개로 거슬러 줄 수 있다.

📝 강의 자료
function solution(m, arr){
  let answer=Number.MAX_SAFE_INTEGER;
  let n=arr.length;
  function DFS(L, sum){
    if(sum>m) return;
    if(L>=answer) return;
    if(sum===m){
      answer=Math.min(answer, L);
    }
    else{
      for(let i=0; i<n; i++){
        DFS(L+1, sum+arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));
*/

// 풀긴 풀었다!
// 너무 많은 재귀를 하길래 고민을 했는데 문제에서 주는 답과 같은 고민이었다.
// 이럴 때 가지치기가 필요!
// answer보다 같거나 큰 값은 볼 필요가 없으니 가지치기

function solution(arr, change) { 

  let N = arr.length;
  let answer = Number.MAX_SAFE_INTEGER;

  //-------------------------------
  // tot만큼 재귀
  function DFS(count, tot) {
    
    if (tot > change) return;
    // answer보다 큰 거나 같으면 가지치기
    if (count >= answer) return; 
    if (tot === change) {
      console.log('count는 : ' + count + ' / tot는 : ' + tot);
      answer = Math.min(answer, count);
    } else {
      // 모든 재귀마다 모든 동적 탐색arr[0], arr[1], arr[2] 더함
      for (let i = 0; i < N; i++) {
        DFS(count + 1, tot + arr[i]);
      }
    }
  }
  //-------------------------------

  // 시작
  DFS(0, 0);
  return answer;
}
let coinArr = [1, 2, 5];
solution(coinArr, 15);
