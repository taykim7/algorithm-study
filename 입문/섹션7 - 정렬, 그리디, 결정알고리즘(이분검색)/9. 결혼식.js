/* 
📝 결혼식
현수는 다음 달에 결혼을 합니다.
현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다.
각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 
수용할 수 있는 장소를 빌리려고 합니다. 여러분이 현수를 도와주세요.
만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는 
것이고 15시 정각에는 존재하지 않는다고 가정합니다.

▣ 입력설명
첫째 줄에 피로연에 참석할 인원수 N(5<=N<=100,000)이 주어집니다.
두 번째 줄부터 N줄에 걸쳐 각 인원의 오는 시간과 가는 시간이 주어집니다.
시간은 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인으로 오는 시간과 가
는 시간이 음이 아닌 정수로 표현됩니다.

▣ 출력설명
첫째 줄에 피로연장에 동시에 존재하는 최대 인원을 출력하세요.

▣ 입력예제 1 
5
14 18
12 15
15 20
20 30
5 14

▣ 출력예제 1
2

📝 강의 자료
function solution(times){
  let answer=Number.MIN_SAFE_INTEGER;

  // 강의자료에서도 타임라인을 활용 (나는 boolean으로 구분했따)
  let T_line=[];
  for(let x of times){
    T_line.push([x[0], 's']);
    T_line.push([x[1], 'e']);
  }

  // 오는 순으로 정렬
  // ***뒤에 구분하는 건 아스키코드로 구분
  T_line.sort((a, b)=>{
    if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
    else return a[0]-b[0];
  });

  // 카운트 중에 큰 수를 담아서 구함!!***
  let cnt=0;
  for(let x of T_line){
    if(x[1]==='s') cnt++;
    else cnt--;
    // 현재 담은 값과 큰 값을 가져옴
    answer=Math.max(answer, cnt);
  }
  return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));
*/

// (1) 강의자료와 비슷하게 풀었따. 다른건 나는 boolean으로 올때갈때를 구분한 것.
// 그리고 나는 카운트 중 가장 큰 값을 구하기 위해 불필요하게 배열을 만들었음
// 강의자료처럼 애초에 큰 값을 담으면 될듯

function solution(arr) {
  
  // 타임라인대로 정렬 (true-올때, false-갈때)
  let timeArr = [];
  for (let item of arr) {
    timeArr.push([item[0], true])
    timeArr.push([item[1], false])
  }

  // 오는 순으로 정렬
  // 그러고보니 a[1] - b[1] 는 boolean인데 어떻게 정렬되려나...
  timeArr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0];
  })

  let result = 0;
  let resultArr = [];

  // 오면 더하고 가면 빼고 그 결과를 배열에 삽입(max메서드 쓰려고)
  for (let item of timeArr) {
    item[1] ? result++ : result--;
    resultArr.push(result);
  }
  return Math.max(...resultArr);
}

let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));
