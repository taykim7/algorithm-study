/* 
📝 부분집합 구하기(DFS)
자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요. 

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.

▣ 출력설명
첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다. 
단 공집합은 출력하지 않습니다.

▣ 입력예제 1 
3

▣ 출력예제 1
1 2 3
1 2
1 3
1
2 3
2
3

* 이진 트리의 기본 구조 : 부모 노드에서 왼쪽 자식, 오른쪽 자식
현재 위에 구조로는 왼쪽은 부모노드*2, 오른쪽은 부모노드*2+1

* 깊이 우선 탐색 : 루트에서 시작해서 왼쪽부터 파고 들어가는 것!!
끝까지 가면 뒤로가서 다른 길로 ... ( 1 -> 2 -> 4 -> *5 -> *3 ....)

* 전위 순회 : 부모부터 시작, ***왼쪽 깊이 파고 오른쪽
* 중위 순회 : 부모가 중간.. ***왼쪽 자식들이 다 출력되야 출력.
* 후위 순회 : 부모가 맨 마지막. ***왼쪽, 오른쪽 다 출력하고 부모가 출력


📝 강의 자료
function solution(n){
  let answer=[];
  let ch=Array.from({length:n+1}, ()=>0);
  function DFS(L){
    if(L===n+1){
      let tmp="";
      for(let i=1; i<=n; i++){
        if(ch[i]===1) tmp+=(i+" ");
      }
      if(tmp.length>0) answer.push(tmp.trim());
    }
    else{
      ch[L]=1;
      DFS(L+1);
      ch[L]=0;
      DFS(L+1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
*/

// 못풀었음 ㅅㅂ
function solution(n) { 
  let result = [];

  // 체크 배열
  let ch = Array.from({ length: n + 1 }, () => 0);
  // [0, 0, 0, 0]
  // 첫번째꺼는 사용안함

  function DFS(k) {
    // 입력숫자보다 크면 ...
    if (k === n + 1) {
      let tmp = '';

      // 1부터 입력숫자까지 체크된 것들만 출력
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }
      console.log(tmp);

    }
    // 입력숫자보다 작으면 ...
    else {

      // 왼쪽 자식
      ch[k] = 1;
      DFS(k + 1);

      // 오른쪽 자식
      ch[k] = 0;
      DFS(k + 1);
  
    }
  }

  // 시작
  DFS(1);
  return result;
}
solution(3)

// [1,2,3] 출력하면 3은 체크 해제된다
// 체크된 것만 출력하기 때문에 [1,2] 가 출력, 2 체크 해제
// 3을 체크하고 [1,3] 출력, 3 체크 해제, 1 체크 해제
// 2를 체크하고, 3을 체크하고 [2,3] 출력, 3 체크 해제, 2 체크 해제
// 3을 체크하고 [3] 출력, 3 체크해제
// 끝

// ===================

// DFS를 활용하여 부분 집합 구하는 알고리즘

function solution(num) {
  
  let numArr = Array.from({length: num + 1}, () => 0 ); // [0, 0, 0, 0] - 0번째 인덱스는 활용하지 않음.

  function DFS(n) {
    // num보다 큰 수를 받으면 출력
    if (n === num + 1) {
      let result = '';
      // 1부터 입력숫자까지 체크된 것들만 출력
      for (let i = 1; i <= num; i++) {
        if (numArr[i] === 1) result += i + ' ';
      }
      // 출력
      console.log(result);
    } else {
      // 포함
      numArr[n] = 1;
      DFS(n + 1);

      // 미포함
      numArr[n] = 0;
      DFS(n + 1);
    }
  };

  DFS(1);
};

solution(3);

// --------------------------

// DFS(1)
//   1포함⭕
//     DFS(2)
//       2포함⭕
//         DFS(3)
//           3포함⭕
//             DFS(4)
//               출력 => [1, 2, 3]
//           3미포함❌
//             DFS(4)
//               출력 => [1, 2]
//       2미포함❌
//         DFS(3)
//           3포함⭕
//             DFS(4)
//               출력 => [1, 3]
//           3미포함❌
//             DFS(4)
//               출력 => [1]
//   1미포함❌
//     DFS(2)
//       2포함⭕
//         DFS(3)
//           3포함⭕
//             DFS(4)
//               출력 => [2, 3]
//           3미포함❌
//             DFS(4)
//               출력 => [2]
//       2미포함❌
//         DFS(3)
//           3포함⭕
//             DFS(4)
//               출력 => [3]
//           3미포함❌
//             DFS(4)
//               출력 => X

// --------------------------

function solution(num) {
  // let checkArr = Array.from({length: num + 1}, () => false);
  let checkArr = Array(num + 1).fill(false);

  function DFS(n) {
    if (n === num + 1) {
      let result = [];

      for (let i = 1; i <= num; i++) {
        if (checkArr[i]) result.push(i);
      }

      console.log(result);

    } else {
      checkArr[n] = true;
      DFS(n + 1);
      
      checkArr[n] = false;
      DFS(n + 1);
    }
  }

  // 1부터 시작!
  DFS(1);
}
solution(3);