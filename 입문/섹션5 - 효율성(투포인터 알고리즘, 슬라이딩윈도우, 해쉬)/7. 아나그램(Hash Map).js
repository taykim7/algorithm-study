/* 
📝 아나그램(해쉬)
Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만
그 구성이 일치하면 두 단어는 아나그램이라고 합니다. 
예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면 

A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.

길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요.
아나그램 판별시 대소문자가 구분됩니다.

▣ 입력설명
첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다. 
단어의 길이는 100을 넘지 않습니다. 

▣ 출력설명
두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.

▣ 입력예제 1 
AbaAeCe
baeeACA

▣ 출력예제 1
YES

▣ 입력예제 2 
abaCC
Caaab

▣ 출력예제 2
NO


📝 강의 자료
function solution(str1, str2){
  let answer="YES"; 
  let sH = new Map();

  // Map에 첫번째 문자가 있으면 +1, 없으면 1로 세팅
  // 두번째 문자는 없으면 바로 NO 있으면 -1

  for(let x of str1){
    if(sH.has(x)) sH.set(x, sH.get(x)+1);
    else sH.set(x, 1);
  }
  for(let x of str2){
    if(!sH.has(x) || sH.get(x)==0) return "NO";
    sH.set(x, sH.get(x)-1);
  }
  return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b)); // YES
*/

// (1) Map에 더해주고 빼서 0이 아니면 NO를 리턴
// 아스키코드로 대소문자 구분

function solution(str1, str2) {
  let result = 'YES';
  const map = new Map();

  for (const i of str1) {
    let asc = i.charCodeAt();
    map.set(asc, (map.get(asc) || 0) + 1);
  }
  for (const i of str2) {
    let asc = i.charCodeAt();
    map.set(asc, (map.get(asc) || 0) - 1);
  }
  for (let [val] of map) {
    if (0 !== val) {
      result = 'NO';
      break;
    }
  }
  return result;
}

console.log(solution('abaCC', 'Caaab'));

// ============================

function solution(a, b) {
  if (a.length !== b.length) return 'NO';

  let mapA = new Map();
  let mapB = new Map();

  for (let i = 0; i < a.length; i++) {
    mapA.set(a[i], (mapA.get(a[i]) || 0) + 1);
    mapB.set(b[i], (mapB.get(b[i]) || 0) + 1);
  }

  for (const [key, val] of mapA) {
    if (mapA.get(key) !== mapB.get(key)) return 'NO';
  }

  return 'YES';
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));

// ↑ Map을 굳이 2개 만들어서 풀었다

// ---------------------------------

// ↓ 개선하여 Map을 1개만 활용해보기

function solution(a, b) {
  if (a.length !== b.length) return 'NO';

  let map = new Map();

  // a 대상으로 세팅
  for (const ch of a) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  // b 대상으로 비교
  for (const ch of b) {
    if (!map.has(ch) || map.get(ch) === 0) return 'NO'; // 애초에 없거나, value가 이미 0 이면 불일치
    map.set(ch, map.get(ch) - 1); // => value가 전부 0 이면, 일치
  }

  return 'YES'
}

let a2="AbaAeCe";
let b2="baeeACA";
console.log(solution(a2, b2));
