/* 
📝 바둑이 승차(DFS)
철수는 그의 바둑이들을 데리고 시장에 가려고 한다.
그런데 그의 트럭은 C킬로그램 넘게 태울수가 없다.
철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
N마리의 바둑이와 각 바둑이의 무게 W가 주어지면,
철수가 트럭에 태울 수 있는 가장 무거운 
무게를 구하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 자연수 C(1<=C<=100,000,000)와 N(1<=N<=30)이 주어집니다.
둘째 줄부터 N마리 바둑이의 무게가 주어진다.

▣ 출력설명
첫 번째 줄에 가장 무거운 무게를 출력한다.

▣ 입력예제 1 
259 5
81
58
42
33
61

▣ 출력예제 1
242

📝 강의 자료
function solution(c, arr){
  let answer=Number.MIN_SAFE_INTEGER;
  let n=arr.length;
  function DFS(L, sum){
    if(sum>c) return;
    if(L===n){
      answer=Math.max(answer, sum);
    }
    else{
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }                  
  }
  DFS(0, 0);
  return answer;
}
let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));
*/

// 풀긴 풀었다 ... 대강 감이 오는 듯
function solution(limit, arr) { 
  let maxSum = 0;

  //-------------------------------
  function DFS(k, sum) {

    if (k === arr.length) {
      // 맨 밑에 도착할 시 검사
      if (sum <= limit && sum > maxSum) {
        maxSum = sum;
        console.log('총합 : ' + sum)
      }
    }

    else {
      // 왼쪽 자식 (더한다)
      DFS(k + 1, sum + arr[k]);
      // 오른쪽 자식 (더하지않는다)
      DFS(k + 1, sum);
      
    }
  }
  //-------------------------------

  // 시작
  DFS(0, 0);
  return maxSum;
}

let dogs = [81, 58, 42, 33, 61];
solution(259, dogs);
