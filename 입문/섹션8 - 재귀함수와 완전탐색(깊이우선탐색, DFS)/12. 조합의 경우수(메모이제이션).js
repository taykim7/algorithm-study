/* 
📝 조합의 경우수(메모이제이션)
nCr = n! / (r!( n-r)!)
로 계산합니다.
하지만 여러분은 이 공식을 쓰지않고 다음 공식을 사용하여 
재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요. 
nCr = n-1Cr-1 + n-1Cr

▣ 입력설명
첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.

▣ 출력설명
첫째 줄에 조합수를 출력합니다.

▣ 입력예제 1                                   
5 3

▣ 출력예제 1
10

▣ 입력예제 2                                   
33 19

▣ 출력예제 2
818809200

C 는 콤비네이션 ...
5C3 은 5개 중에 3개를 뽑는 것...
(5 x 4 x 3) / (3 x 2 x 1) = 10

nCr = n-1Cr-1 + n-1Cr
이 공식은 ...

5C3 = 4C2 + 4C3
원소가 5고 3개를 뽑는다는 것

여기서 어떠한 숫자 n을 예를 들면 ...
n이 포함된 경우의 수는 5-1개 중에 3-1 개를 구하면 되고
n이 포함되지 않는 경우의 수는 5-1개 중에 3개를 구하면 된다.

📝 강의 자료
function solution(n, r){         
  let answer=[];
  let dy= Array.from(Array(35), () => Array(35).fill(0));
  
  function DFS(n, r){
    if(dy[n][r]>0) return dy[n][r];
    if(n===r || r===0) return 1;
    else return dy[n][r]=DFS(n-1, r-1)+DFS(n-1, r);
  }
  answer=DFS(n, r);
  return answer;
}
console.log(solution(5, 3));
*/

function solution(n, r) { 

  let result;
  // 메모지에이션에 활용할 배열 (넉넉하게 40)
  let dy = Array.from(Array(40), ()=> Array(40).fill(0));
  //-------------------------------
  function DFS(n, r) {
    // 메모지에이션 배열에 저장된거 반환
    if(dy[n][r]>0) return dy[n][r];
    // 최종지점은 r이 0이거나 n과 r이 같으면
    if (r===0 || r===n) return 1;
    else return dy[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
  }
  //-------------------------------

  result = DFS(n, r);
  return result;
}

// solution(5, 3);
solution(33, 19);

// 메모지에이션에 의해 시간복잡도가 확 줄음
// 활용안했을때는 겁나 오래걸림

// ======================2회차 풀이=======================

// 콤비네이션이라는 게 조합 공식을 말하는 것.
// 즉, 이건 조합의 경우의 수를 구하는 메서드다.
// nCr 이라는 것은 n개 중에서 r개를 선택하는 방법의 수
// 원래의 공식은 팩토리얼을 활용하여 nCr = n! / (r!( n-r)!) 구하는 방법이지만
// 재귀식?으로 표현하면 nCr = n-1Cr-1 + n-1Cr 이 된다.

// 또한 메모지에이션을 활용해서 이미 구했던 콤비네이션을 저장한다.

function solution2(n, r) { 

  let result;
  let dy = Array.from(Array(40), ()=> Array(40).fill(0));
  //-------------------------------
  function DFS(n, r) {
    // 메모지에이션 배열에 저장된게 있으면 꺼내온다.
    if(dy[n][r]>0) return dy[n][r];
    // 최종지점은 r이 0이거나 n과 r이 같으면 1을 반환.
    if (r===0 || r===n) return 1;
    else return dy[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
  }
  //-------------------------------

  result = DFS(n, r);
  return result;
}

solution2(33, 19);