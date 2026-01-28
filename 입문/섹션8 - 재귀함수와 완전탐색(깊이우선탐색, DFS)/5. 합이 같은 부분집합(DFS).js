/* 
📝 합이 같은 부분집합(DFS : 아마존 인터뷰)
N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때 
두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고,
그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.

둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며,
두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 합니다.

예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 
16으로 같은 경우가 존재하는 것을 알 수 있다.

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
두 번째 줄에 집합의 원소 N개가 주어진다.
각 원소는 중복되지 않으며, 그 크기는 1,000,000이하입니다.

▣ 출력설명
첫 번째 줄에 “YES" 또는 ”NO"를 출력한다.

▣ 입력예제 1 
6
1 3 5 6 7 10 

▣ 출력예제 1
YES

📝 강의 자료

function solution(arr){
  let answer="NO", flag=0;
  let total=arr.reduce((a, b)=>a+b, 0);
  let n=arr.length;
  function DFS(L, sum){
    if(flag) return;
    if(L===n){
      if((total-sum)===sum){
        answer="YES";
        flag=1;
      }
    }
    else{
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));
*/

// 못풀었음 ㅋ .. flag 만들어서 정답 찾으면 바로 나가게하는게 좋음
function solution(arr) { 
  let answer = 'no';

  // 총합
  let tot = 0;
  for (const item of arr) {
    tot += item;
  }
  // arr.reduce((a, b) => a + b, 0);

  //-------------------------------
  function DFS(k, sum) {
    console.log('index : ' + k + ', sum : ' + sum);

    if (k === arr.length) {
      console.log('검사시간')
      if ((tot - sum) === sum) {
        console.log('찾았다! 총합 : ' + sum)
        answer = 'yes';
      }
    }

    else {
      
      // 왼쪽 자식 (더한다)
      DFS(k + 1, sum+arr[k]);
      // 오른쪽 자식 (더하지않는다)
      DFS(k + 1, sum);
      
    }
  }
  //-------------------------------

  // 시작
  DFS(0, 0);
  return answer;

}
solution([1, 3, 5, 6, 7, 10]);

// ==============================

// DFS를 활용하여 집합을 두 개의 부분집합으로 나누었을 때 합이 같을 경우가 존재하는지 찾는 알고리즘

function solution(arr) {
  
  let total = arr.reduce((a, b) => a + b, 0);
  let arrLenght = arr.length;
  let flag = false;

  // 총합이 홀수면 애초에 불가능함... 대박
  if (total % 2 !== 0) return 'NO';

  function DFS(seq, sum) {

    if (flag) return;

    // 부분집합의 총합이 더 클 경우 가지치기
    if (sum > total / 2) return;

    if (seq === arrLenght) {
      if (total - sum === sum) {
        flag = true;
      }
    } else{
      DFS(seq + 1, sum + arr[seq]);
      DFS(seq + 1, sum);
    }

  };

  
  DFS(0, 0);
  return flag ? 'YES' : 'NO';
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));

// 총합을 미리 구해두고 배열 하나씩 순회
// DFS는 모든 경우의 수를 고려하기 때문에 모든 부분집합의 경우의 수를 탐색
// 부분집합의 합과 (총합 - 부분집합의 합)이 같다면 flag를 통해 조기종료

// ------------------------------------------

function solution(arr) {
  const total = arr.reduce((a, b) => (a + b) , 0);
  const n = arr.length;
  let flag = false;

  if (total % 2 !== 0) return 'NO';

  function DFS(index, nowSum) {
    if (flag) return;
    if (nowSum > total / 2) return;
    if (index === n) {
      if (nowSum === total - nowSum) {
        flag = true;
      }
    } else {
      DFS(index + 1, nowSum + arr[index]);
      DFS(index + 1, nowSum);
    }

  }

  DFS(0, 0);
  return flag ? 'YES' : 'NO';
};

let arr2 = [1, 3, 5, 6, 7, 10];
console.log(solution(arr2));