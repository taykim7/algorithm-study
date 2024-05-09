/* 
📝 중복순열 구하기
1부터 N까지 번호가 적힌 구슬이 있습니다.
이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.

▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.

출력순서는 사전순으로 오름차순으로 출력합니다.

▣ 입력예제 1 
3 2

▣ 출력예제 1
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
9

📝 강의 자료

○ 이중 포문을 활용한 방법
단순한 이중포문으로는 한계가 있다.
2번을 뽑는 경우에만 가능하고, 그 이상을 뽑는 경우에는 n중포문을 활용해야한다.
즉, M에 따라서 동적으로 계산할 수 없음!

function solution(m, arr){         
  let answer=[];
  n=arr.length;
  let ch=Array.from({length:n}, ()=>0);
  let tmp=Array.from({length:m}, ()=>0);;
  function DFS(L){
    if(L===m){
      answer.push(tmp.slice()); 
    }
    else{
      for(let i=0; i<n; i++){
        if(ch[i]===0){
          ch[i]=1;
          tmp[L]=arr[i];
          DFS(L+1);
          ch[i]=0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}
let arr=[3, 6, 9];
console.log(solution(2, arr));


○ 재귀를 활용한 방법

function solution(m, arr){         
  let answer=[];
  n=arr.length;
  let ch=Array.from({length:n}, ()=>0);
  let tmp=[];

  function DFS(L){
    if(L===m){
      answer.push(tmp.slice()); 
    }
    else{
      for(let i=0; i<n; i++){
        if(ch[i]===0){
          ch[i]=1;
          tmp.push(arr[i]);
          DFS(L+1);
          ch[i]=0;
          tmp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr=[3, 6, 9];
console.log(solution(2, arr));
*/

// 감은 개뿔 존나 어렵네 ....
function solution(num, tot) { 

  let arr = [];
  let count = 0;

  //-------------------------------
  // tot만큼 재귀
  function DFS(k) {
    if (k > tot) return;
    if (k === tot) {
      console.log(arr);
      count += 1;
    }
    else {
      // 1부터 3까지
      for (let i = 1; i <= num; i++) {
        arr[k] = i;
        DFS(k + 1);
      }
    }
  }
  //-------------------------------

  // 시작
  DFS(0);
  return count;
}
solution(3, 2);
