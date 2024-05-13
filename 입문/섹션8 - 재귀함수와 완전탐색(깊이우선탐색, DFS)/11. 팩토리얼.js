/* 
📝 팩토리얼
자연수 N을 입력하면 N!값을 구하세요.
N! = n*(n-1)*(n-2)*.....*2*1입니다. 
만약 N=5라면 5!=5*4*3*2*1=120입니다.

▣ 입력설명
첫째 줄에 자연수 N(3<=n<=10)이 입력됩니다.

▣ 출력설명
첫째 줄에 N팩토리얼 값을 출력합니다.

▣ 입력예제 1                                   
5

▣ 출력예제 1
120

📝 강의 자료
function solution(n){         
  let answer;
  function DFS(n){
    // 1일때 리턴
    if(n===1) return 1;
    else return n*DFS(n-1); 
  }
  // 최종적으로 (((((1) * 2) * 3) * 4) * 5) 가 된다.

  answer=DFS(n);
  return answer;

console.log(solution(5));

*/

// 출력 예제대로 나오긴 했지만 패턴이 다르다
// 강의 자료는 재귀가 리턴한 값으로 답을 만들어감
// 내 풀이는 5부터 누적하여 곱하는 방식
function solution(num) { 

  let result = 1;
  //-------------------------------
  function DFS(n) {
    if (0 === n) return;
    else {
      result = result * n;
      DFS(n-1);
    }
  }
  //-------------------------------

  DFS(num);
  return result;
}

solution(5);
