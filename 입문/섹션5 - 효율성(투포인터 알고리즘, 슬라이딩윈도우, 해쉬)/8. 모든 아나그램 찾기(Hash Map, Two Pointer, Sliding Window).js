/* 
📝 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
아나그램 판별시 대소문자가 구분됩니다.
부분문자열은 연속된 문자열이어야 합니다.

▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다. 
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

▣ 입력예제 1 
bacaAacba
abc

▣ 출력예제 1
3

출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다


📝 강의 자료 - 빼고 더함 (윈도우)

// 두 맵을 비교하는 메서드 활용
function compareMaps(map1, map2){

  // 사이즈(key의 종류) 다르면 false
  if(map1.size!==map2.size) return false;

  // 같으면 map1의 key들을 map2에 없거나 map2의 val과 다르면 false
  for(let [key, val] of map1){
    if(!map2.has(key) || map2.get(key)!==val) return false;
  }

  // 모두 통과하면 같은 map이다~
  return true;
}

function solution(s, t){
  let answer=0;

  // 두 개의 Map을 비교하여 활용함
  let tH = new Map();
  let sH = new Map();

  // 비교할 문자열 Map을 세팅
  for(let x of t){
    if(tH.has(x)) tH.set(x, tH.get(x)+1);
    else tH.set(x, 1);
  }

  // 길이가 3이면 일단, 2개까지만 세팅해둔다.
  let len=t.length-1;
  for(let i=0; i<len; i++){
    if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
    else sH.set(s[i], 1);
  }

  // 그리고 3부터 시작하여 전체 순회(rt)
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
  
    // 뒷글자부터 탐색.
    // 즉, 뒷글자가 있으면 +1 없으면 1로 세팅
    if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
    else sH.set(s[rt], 1);

    // 두 맵을 비교하는 메서드(compareMaps) 활용하여 count에 +1
    if(compareMaps(sH, tH)) answer++;

    // 비교 끝

    // s 문자열의 lt 인덱스의 key에 -1로 세팅
    sH.set(s[lt], sH.get(s[lt])-1);

    // 만약 0 이면 삭제하고 부분순회 (lt) +1
    if(sH.get(s[lt])===0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));
*/

// (1) 어케어케 풀었지만 복사한 Map을 계속 활용하는게 비효율적이라 마음에 안듬 ...

function solution(S, T) {

  // Map 생성
  const map = new Map();
  let count = 0;

  // 비교할 문자열 T를 모두 담는다.
  for (let x of T) {
    if(map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }

  // 전체 순회
  for (let i = 0; i < S.length - 2; i++) {
    
    // 카피한 Map 생성
    const copyMap = new Map(map.entries());

    // 부분 순회하며 -1 로 세팅
    for (let j = i; j < i + 3; j++) {
      if(copyMap.has(S[j])) copyMap.set(S[j], copyMap.get(S[j]) - 1);
        else copyMap.set(S[j], -1);
    }
  
    // flag를 활용해서 전체가 0인 map 확인
    let flag = true;
    for (let [key, val] of copyMap) {
      if (0 !== val) {
        flag = false;
      }
    }

    // flag에 통과하면 +1
    if (flag) count += 1;
  }

  return count;
}

console.log(solution('bacaAacba', 'abc'));
