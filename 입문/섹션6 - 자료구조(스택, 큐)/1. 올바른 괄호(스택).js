/* 
📝 올바른 괄호
괄호가 입력되면 올바른 괄호이면 'YES', 올바르지 않으면 'NO'를 출력합니다.
(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만,
(()()))은 올바른 괄호가 아니다.

▣ 입력설명
첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다. 

▣ 출력설명
첫 번째 줄에 YES, NO를 출력한다.

▣ 입력예제 1 
(()(()))(()

▣ 출력예제 1
NO

📝 강의 자료 - 스택을 활용

스택 : Last In First Out
큐 : First In First Oust


function solution(s){
  let answer="YES";
  stack=[];
  for(let x of s){
    if(x==='(') stack.push(x);
    else{
      if(stack.length===0) return "NO";
      stack.pop();
    }
  }
  if(stack.length>0) return "NO";  
  return answer;
}

let a="(()(()))(()";
console.log(solution(a));
*/

// (1) 강의자료랑 거의 비슷한듯
// 별 생각없이 배열로 풀었는데 잘했넹
function solution(str) {

  let arr = [];
  for (const cha of str) {
    if ('(' === cha) {
      arr.push(cha);
    } else {
      if (0 < arr.length) {
        arr.pop();
      } else {
        return 'NO';
      }
    }
  }
  if (0 === arr.length) {
    return 'YES';
  } else {
    return 'NO';
  }}

let str = '(()(()))(()'
console.log(solution(str));

// =============================

function solution(str) {
  let stack = []
  for (const element of str) {
    if ('(' === element) {
      stack.push('(')
    } else {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return 'NO';
      }
    }
  }

  if (0 < stack.length) return 'NO';
  else return 'YES';
}
let a="(()(()))(())";
console.log(solution(a));

// ↑ 올바른 괄호이면 'YES', 올바르지 않으면 'NO'를 출력하는 알고리즘
// 사소한 개선사항으로 굳이 '(' 기호를 삽입하지 않아도됨.
