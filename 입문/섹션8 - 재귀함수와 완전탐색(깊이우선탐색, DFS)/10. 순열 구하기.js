/* 
📝 순열 구하기
10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.

▣ 입력예제 1 
3 2
3 6 9

▣ 출력예제 1
3 6
3 9
6 3
6 9
9 3
9 6
6

📝 강의 자료
// 방법1
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

// 방법2
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

// 체크배열을 잘 활용해보자 ...
function solution(arr, M) { 

  let N = arr.length;
  let resultArr = Array.from({ length: M }, () => 0);
  let checkArr = Array.from({ length: N }, () => 0);
  let result = [];

  //-------------------------------
  function DFS(index) {
    // M개가 충족되면 깊은 복사한다.
    if (index === M) {
      // 깊복
      result.push(resultArr.slice());
    } else {
      // 배열 전체 순회
      for (let i = 0; i < N; i++) {
        // 체크 배열이 0인 것만
        if (checkArr[i] === 0) {
          // 체크 배열을 1로 수정하고 데이터를 가져오고 재귀호출
          // 복귀시점에 다시 0으로 수정
          checkArr[index] = 1;
          resultArr[index] = arr[i];
          DFS(index + 1);
          checkArr[index] = 0;
        }
      }
    }
  }
  //-------------------------------

  DFS(0);
  return result;
}
let numArr = [3, 6, 9];
solution(numArr, 2);
