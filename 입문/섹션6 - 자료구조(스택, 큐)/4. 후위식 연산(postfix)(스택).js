/* 
📝 후위식 연산(postfix)
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다.
연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

▣ 출력설명
연산한 결과를 출력합니다.

▣ 입력예제 1 
352+*9-

▣ 출력예제 1
12

📝 강의 자료
중위식, 후위식 이런거 처음 알았따..;

function solution(s){  
  let answer;
  let stack=[];
  for(let x of s){
    if(!isNaN(x)) stack.push(Number(x));
    else{
      let rt=stack.pop();
      let lt=stack.pop();
      if(x==='+') stack.push(lt+rt);
      else if(x==='-') stack.push(lt-rt);
      else if(x==='*') stack.push(lt*rt);
      else if(x==='/') stack.push(lt/rt);
    }
  }
  answer=stack[0];
  return answer;
}

let str="352+*9-";
console.log(solution(str));
*/

// (1) 강의 자료와 비슷하게 풀었다.

function solution(str) {
  let arr = str.split('');
  let n = arr.length;
  let numArr = [];

  for (let i = 0; i < n; i++){
    if (isNaN(arr[i])) {
      let num1 = numArr.pop();
      let num2 = numArr.pop();
      let num3;
      
      // 숫자가 아닐때 이전 & 전전꺼 하나씩 pop 후 계산
      if ('+' === arr[i]) {
        num3 = Number(num2) + Number(num1);
      } else if ('-' === arr[i]) {
        num3 = Number(num2) - Number(num1);
      } else if ('*' === arr[i]) {
        num3 = Number(num2) * Number(num1);
      } else if ('/' === arr[i]) {
        num3 = Number(num2) / Number(num1);
      }

      // 계산한거 push
      numArr.push(num3);
    } else {
      numArr.push(arr[i]);
      continue;
    }
  }
  return numArr[0];
}

let str = '352+*9-';
console.log(solution(str));

// =======================

function solution(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      stack.push(Number(str[i]))
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (str[i] === '+') stack.push(lt + rt);
      else if (str[i] === '-') stack.push(lt - rt);
      else if (str[i] === '*') stack.push(lt * rt);
      else if (str[i] === '/') stack.push(lt / rt);
    }
  }
  return stack[0]
}
let str2="352+*9-";
console.log(solution(str2));

// ↑ 후위연산식이 주어지면 연산한 결과를 출력하는 알고리즘
// pop을 잘 활용하자... rt와 lt는 계산의 순서!
