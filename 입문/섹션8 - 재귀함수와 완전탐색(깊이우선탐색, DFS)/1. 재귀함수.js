/* 
📝 재귀함수
자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.

▣ 출력설명
첫째 줄에 출력한다.

▣ 입력예제 1 
3

▣ 출력예제 1
1 2 3 


📝 강의 자료

스택을 활용해야한다.
* DFS : 깊이 우선 탐색
* 재귀함수 : 자기가 자기자신을 호출

function solution(n){
  // 내부함수를 활용
  function DFS(L){
    if(L==0) return;
    else{
      // 자기 자신을 호출함;
      DFS(L-1);
      console.log(L);   
    }
  }

  // 내부함수 호출
  DFS(n);
}
solution(3);

함수를 호출하게되면 우선 DFS(3)을 호출하고
그 내부적으로 DFS(2)를 호출.. 그리고 DFS(1)을 호출.. 그리고 DFS(0)을 호출한다.
DFS(0)을 호출하게되면 if문에 의해 return으로 종료된다.

*** 여기서 스택 프레임은 ...

우선 DFS(3)의 정보가 담게된다. 
정보는 매개변수, 지역변수, 복귀주소를 저장.

DFS(2)를 호출해서 대기하게 된다.
그리고 DFS(2)의 매개변수, 지역변수, 복귀주소를 저장.

그리고 또 DFS(1)을 호출해서 대기 ..

마지막으로 DFS(0)의 매개변수, 지역변수, 복귀주소가 저장되고,
바로 return으로 스택 프레임에서 제거되고 북귀주소로 돌아간다.

그리고 DFS(1)에 호출된 주소로 돌아가게되고 console.log를 찍고,
스택 프레임에서 제거되고 복귀주소로 돌아간다.

DFS(2)에 호출된 주소로 돌아가고 ...
최종적으로 DFS(3) 까지 console.log를 수행하고 스택 프레임에서 제거되며 끝.

*/

// (1) 이게 아니라 재귀함수를 사용해야한다;ㅋㅋㅋㅋ
function solution(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
console.log(solution(3));

// (2) 재귀 함수로 풀어봤다
function solution(n) {

  let i = 1;

  function DFS(k) {
    if (0 === k) {
      console.log('재귀 end');
      return;
    } else {
      console.log('재귀 before ' + i++ + ' 번째 : ' + k);
      DFS(k - 1);
      console.log('재귀 after ' + i++ + ' 번째 : ' + k);
    }
  }

  DFS(n);
}

solution(3);

// 재귀 before 1 번째 : 3
// 재귀 before 2 번째 : 2
// 재귀 before 3 번째: 1
// 재귀 end
// 재귀 after 4 번째 : 1
// 재귀 after 5 번째 : 2
// 재귀 after 6 번째 : 3