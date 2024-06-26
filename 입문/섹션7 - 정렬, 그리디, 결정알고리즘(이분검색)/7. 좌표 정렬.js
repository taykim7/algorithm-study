/* 
📝 좌표 정렬
N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하세요.
정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.

▣ 입력설명
첫째 줄에 좌표의 개수인 N(3<=N<=100,000)이 주어집니다.
두 번째 줄부터 N개의 좌표가 x, y 순으로 주어집니다.
x, y값은 양수만 입력됩니다.

▣ 출력설명
N개의 좌표를 정렬하여 출력하세요.

▣ 입력예제 1 
2 7
1 3
1 2
2 5
3 6

▣ 출력예제 1
1 2
1 3
2 5
2 7
3 6


📝 강의 자료 - 그냥 sort로 풀면 되는구나 ..
function solution(arr){
  let answer=arr;
  arr.sort((a, b)=>{
    // x좌표가 같을 경우
    if(a[0]===b[0]) return a[1]-b[1];
    // 아니면 x좌표 순서대로 정렬
    else return a[0]-b[0];
  });
  return answer;
}
let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));
*/

// (1) 아 이렇게 풀면 비효율적인건가?

function solution(arr) {

  // 전체 순회
  for (let i = 0; i < arr.length; i++){
    // 비교할 배열을 담음
    let tmp = arr[i], j;
    for (j = i - 1; j >= 0; j--){
      // x좌표가 같으면
      if (arr[j][0] === tmp[0]) {
        // y좌표 비교, 더 크면
        if (arr[j][1] > tmp[1]) {
          arr[j + 1] = arr[j];
        }
      } else if (arr[j][0] > tmp[0]) {
        // x좌표가 크면 순서 변경
        arr[j + 1] = arr[j];
      }
      else break;
    }
    arr[j + 1] = tmp;
  }
  return arr;
}

let arr = [[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));