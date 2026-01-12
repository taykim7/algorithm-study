/* 
📝 괄호문자제거
입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
남은 문자만 출력한다.

▣ 입력예제 1 
(A(BC)D)EF(G(H)(IJ)K)LM(N)

▣ 출력예제 1
EFLM

📝 강의 자료
function solution(s){  
  let answer;
  let stack=[];

  for(let x of s){
  
    // 모두 push를 하다가
    // 닫는 괄호가 나오면
    // pop 반복
    // pop 으로 제거된 문자가 여는 괄호면
    // 반복 종료
  
    if(x===')'){
      console.log(stack)
      while( stack.pop() !== '(' );
    }
    else stack.push(x);
  }

  // 배열 연결 후 return
  answer=stack.join('');
  return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
*/

// (1) 여는 괄호 ('(') 는 무조건 push
// 닫는 괄호 (')')일때는 pop
// 스택에 아무것도 없을때 문자 가져오기.

function solution(str) {
  let result = '';
  let stack = [];

  for (const item of str) {
    if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      stack.pop();
      continue;
    }
    if (0 === stack.length) {
      result += item;
    }
  }
  return result;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)'
console.log(solution(str));

// ========================


function solution(str) {
  let result = ''
  let stack = []

  for (const element of str) {
    if (element === '(') {
      stack.push(1); 
    } else if (element === ')') {
      stack.pop();
    } else {
      // 소괄호 사이에 속해있지 않을 때
      if (0 === stack.length) result += element;
    }
  }
  return result;
}
let str2="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str2));

// ↑ 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 알고리즘
// 괄호의 내용이 중요한게 아니라 상태만 필요하기 때문에 push(1)로 메모리사용 최소화

//-------------------------

function solution(str) {
  let stack = []
  for (const element of str) {
    if (element === ')') {
      while( stack.pop() !== '(' );
    } else {
      stack.push(element);
    }
  }
  return stack.join('');
}
let str3="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str3));

// ↑ 강의자료 풀이.
// 닫는 괄호가 나오면 여는 괄호가 나올대까지 다 pop 해버림
// 남는 것들만 join 하여 출력