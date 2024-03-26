/* 
📝 학급 회장(해쉬)
학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며
선생님은 그 기호를 발표하고 있습니다.
선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하세요.
반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.

▣ 입력설명
첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 
문자열로 입력됩니다.

▣ 출력설명
학급 회장으로 선택된 기호를 출력합니다.

▣ 입력예제 1 
15
BACBACCACCBDEDE

▣ 출력예제 1
C


📝 강의 자료
key와 value가 한 쌍으로 된 Map 활용

has(key) : 존재하는지 확인
entries() : [key, value] 쌍의 객체로 반환 => 주로 반복문에 사용하기 위해 사용
reduce(누적, 현재) : 배열 각 요소에 

function solution(s){  
  let answer;
  let sH = new Map();

  // value가 세팅되어 있으면 +1 아니면 1로 세팅
  for(let x of s){
    if(sH.has(x)) sH.set(x, sH.get(x)+1);
    else sH.set(x, 1);
  }

  let max=Number.MIN_SAFE_INTEGER;
  // Map 객체를 하나씩 비교해가며 max 찾기 + key값 저장
  for(let [key, val] of sH){
    if(val>max){
      max=val;
      answer=key;
    }
  }
  // key값 반환
  return answer;
}
let str="BACBACCACCBDEDE";
console.log(solution(str));
*/

// (1) Map 으로 풀었다
function solution(arr) {
  const map = new Map();
  // value가 없으면 0으로 세팅. 아니면 +1
  for (const i of arr) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  // entries(), reduce()를 통해 max 찾기
  let max = [...map.entries()].reduce((a, b) => a[1] > b[1] ? a : b)[0]; // ['C', 5][0]
  return max
}

let arr=['B', 'A', 'C', 'B', 'A', 'C', 'C', 'A', 'C', 'C', 'B', 'D', 'E', 'D', 'E'];
console.log(solution(arr));
