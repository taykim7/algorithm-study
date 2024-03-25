/* 
📝 최대 매출
현수의 아빠는 제과점을 운영합니다.
현수 아빠는 현수에게 N일 동안의 매출기록을 주고
연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면 
12 15 11 20 25 10 20 19 13 15
연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
여러분이 현수를 도와주세요.

▣ 입력설명
첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.
두 번째 줄에 N개의 숫자열이 주어집니다.
각 숫자는 500이하의 음이 아닌 정수입니다.

▣ 출력설명
첫 줄에 최대 매출액을 출력합니다.

▣ 입력예제 1 
10 3
12 15 11 20 25 10 20 19 13 15

▣ 출력예제 1
56

📝 강의 자료 - 슬라이딩 윈도우

슬라이딩 윈도우 : 순차적으로 배열이나 리스트를 탐색하는 기법
주로 연속적인 부분에서 윈도우를 이동시키며 윈도우 내의 값을 계산하고 원하는 조건(최대/최소)을 찾아냄.

K일 동안의 윈도우를 설정하고
오른쪽으로 이동시키면서 윈도우 내의 매출액을 계산하고 최대값 구하기

function solution(k, arr){
  let answer, sum=0;

  // 첫 윈도우 - arr[0] 에서 arr[2] 까지의 합 구함
  for(let i=0; i<k; i++) sum+=arr[i];
  answer=sum;

  // 그리고 윈도우를 오른쪽으로 움직이며 배열에 추가하고 max를 활용해서 구하기.
  for(let i=k; i<arr.length; i++){
    // 뒤에거 arr[i] 더하고 앞에거 arr[i-k] 빼면됨 ***
    sum+=(arr[i]-arr[i-k]);
    answer=Math.max(answer, sum);
  }                    
  return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
*/

// (1) 문제는 해결했지만 슬라이딩 윈도우 활용을 안했음.
function solution(arr, num) {
  let rt, tot, result = 0;
  let lt = num;

  // lt가 num보다 커질때까지 반복
  while (lt < arr.length) { 
    for (let i = rt; i < lt; i++) {
      tot += arr[i];
    }
    // 더한 값이 크면 추가
    if (result < tot) result = tot;
    // 초기화
    rt++;
    lt++;
    tot = 0;
  }
  return result;
}

let arr=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(arr, 3));
