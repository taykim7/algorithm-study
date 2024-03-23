/* 
📝 연속 부분수열 1
N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
만약 N=8, M=6이고 수열이 다음과 같다면
1 2 1 3 1 1 1 2 
합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 
수열의 원소값은 1,000을 넘지 않는 자연수이다.

▣ 출력설명
첫째 줄에 경우의 수를 출력한다.

▣ 입력예제 1 
8 6
1 2 1 3 1 1 1 2

▣ 출력예제 1
3

📝 강의 자료 - 투포인터 알고리즘

투포인터 : lt, rt
rt의 역할은 for문을 돌면서 arr 배열 하나씩 더함
더하다가 합과 m이 같으면 count
더하다가 합이 크면 while문 실행
lt의 초기값이 0이라 합에 arr[0]만큼 뺀다.
뺐더니 합과 m이 같으면 count
뺐더니 합이 여전히 크면 또 while문 실행
=> 하나씩 더하다가 크면 앞에서부터 빼고 다시 작아지면 또 더하고 ...

rt는 커지면서 더하고
lt는 커지면서 뺀다

function solution(m, arr){
  let answer=0, lt=0, sum=0;

  for(let rt=0; rt<arr.length; rt++){
    sum+=arr[rt];
    // 더할때마다 확인하자
    if(sum===m) answer++;

    // m보다 큰 경우 lt에 +1
    while(sum>=m){
      sum-=arr[lt++];
      // 뺄때마다 확인하자
      if(sum===m) answer++;       
    }
  }        
  return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
*/

// (1) 이중포문으로 풀었다 => n제곱 알고리즘
function solution(arr, num) {
  
  let tot = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    tot = 0;
    for (let j = i; j < arr.length; j++) {
      tot += arr[j]
      if (tot > num) continue;
      else if (tot === num) {
        count += 1;
        continue;
      }
    }
  }
  return count;
}
let arr=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(arr, 6));
