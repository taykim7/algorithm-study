/* 
📝 두 배열 합치기(Two Pointers Algorithm)
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다. 
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다. 
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다.

▣ 입력예제 1 
3
1 3 5
5
2 3 6 7 9

▣ 출력예제 1
1 2 3 3 5 6 7 9


📝 강의 자료 - 투포인터 알고리즘

  알고보니 투포인터 알고리즘으로 풀어야한다고 함..
  n개를 정렬하면 시간복잡도는 nlogn... 뭔지모름
  투포인터를 활용하면 시간복잡도는 .. n+m ... 몰라

  function solution(arr1, arr2){
    let answer=[];
    let n=arr1.length;
    let m=arr2.length;

    // ***포인터 변수 p1, p2
    let p1=p2=0;

    // arr1[p1]과 arr2[p2] 중에 작은걸 먼저 push
    // push한 쪽의 포인터를 +1

    // 하나가 끝날때까지 반복.
    // p1++, p2++로 연산 후 +1

    while(p1<n && p2<m){
      if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]);
      else answer.push(arr2[p2++]);
    }

    // 안끝난쪽 마저 push
    while(p1<n) answer.push(arr1[p1++]);
    while(p2<m) answer.push(arr2[p2++]); 
    return answer;
  }
  
  let a=[1, 3, 5];
  let b=[2, 3, 6, 7, 9];
  console.log(solution(a, b));
*/

// (1) 투포인터가 뭔지 몰라서 .. 그냥 스프레드로 합침..
function solution(arr1, arr2) {
  let result = [];
  result.push(...arr1);
  result.push(...arr2);
  result.sort((a, b) => a - b);
  return result;
}
let arr1=[1, 3, 5];
let arr2=[2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
// ❌ 즉, 틀렸다는 말이란다.
