/* 
📝 가장 짧은 문자거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

▣ 입력예제 1 
teachermode e

▣ 출력예제 1
1 0 1 2 1 0 1 2 2 1 0

📝 강의 자료
// 1000을 초기화하고
// 해당 문자가 아니면 +1
// 해당 문자를 만나면 1000을 0으로 초기화
// 그럼 1001, 0, 1, 2, 3, 0, 1, 2, 3, 4, 0 이 된다.
// 즉, 각 문자의 왼쪽에 있는 해당 문자로부터의 거리
// 하지만 문제의 거리는 왼쪽뿐만 아니라 오른쪽도 생각해야한다.
// 그래서 이번엔 오른쪽을 기준으로 구한다
// 구한 값이 기존에 구한 값보다 작으면 교체한다.

function solution(s, t){
  let answer=[];
  // 일단 큰 값으로 초기화
  let p = 1000;

  // 모든 문자 순회1
  for(let x of s){
    // 각 문자가 해당 문자일 경우 0으로 초기화 후 push
    if(x===t){
      p=0;
      answer.push(p);
    }
    else{
      // 아닐 경우 +1하고 push
      p++;
      answer.push(p);
    }
  }

  // 모든 문자 순회2
  p=1000;
  for(let i=s.length-1; i>=0; i--){
    if(s[i]===t) p=0;
    else{
      p++;
      // 기존에 구한 곳보다 작다면 교체
      answer[i]=Math.min(answer[i], p);
    }
  }
  return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));
*/

// (1) 해당 문자의 인덱스를 전부 구하고
// 각 문자의 인덱스와 해당 문자의 인덱스의 차이를
// 절대값(abs)으로 변환 후 가장 낮은 걸(min)로 구했다.

function solution(str, cha) {
  // 찾는 문자의 인덱스 배열 indexArr
  let indexArr = [];
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let chaIndex = str.indexOf(cha, i);
    if (0 <= chaIndex) {
      indexArr.push(chaIndex);
      i = chaIndex;
    }
  }
  // 모든 문자의 인덱스 (0~10)
  for (const strIndex in str) {
    let distanceArr = []
    // 인덱스와 찾는 문자의 인덱스의 합이 작을수록 가까이에 찾는 문자가 있다는 뜻
    for (const indexItem of indexArr) {
      distanceArr.push(Math.abs(indexItem - strIndex));
    }
    result.push(Math.min(...distanceArr));
  }
  return result.join(' ');
}
let str="teachermode";
let cha="e";
console.log(solution(str, cha));
