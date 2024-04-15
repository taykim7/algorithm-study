/* 
📝 장난꾸러기 현수

새 학기가 시작되었습니다.
현수는 새 짝꿍을 만나 너무 신이 났습니다. 
현수네 반에는 N명의 학생들이 있습니다.

선생님은 반 학생들에게 반 번호를 정해 주기 위해
운동장에 반 학생들을 키가 가장 작은 학생부터 일렬로 키순으로 세웠습니다.

제일 앞에 가장 작은 학생부터 반 번호를 1번부터 N번까지 부여합니다.
현수는 짝꿍보다 키가 큽니다. 그런데 현수가 앞 번호를 받고 싶어 짝꿍과 자리를 바꿨습니다.
선생님은 이 사실을 모르고 학생들에게 서있는 순서대로 번호를 부여했습니다. 

현수와 짝꿍이 자리를 바꾼 반 학생들의 일렬로 서있는 키 정보가 주어질 때
현수가 받은 번호와 현수 짝꿍이 받은 번호를 차례로 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 자연수 N(5<=N<=100)이 주어진다.
두 번째 줄에 제일 앞에부터 일렬로 서있는 학생들의 키가 주어진다. 
키(높이) 값 H는 (120<=H<=180)의 자연수 입니다.

▣ 출력설명
첫 번째 줄에 현수의 반 번호와 짝꿍의 반 번호를 차례로 출력합니다.

▣ 입력예제 1 
9
120 125 152 130 135 135 143 127 160

▣ 출력예제 1
3 8
출력해설 : 키 정보 152가 현수이고, 127이 현수 짝꿍입니다.

▣ 입력예제 2 
6
120 130 150 150 130 150

▣ 출력예제 2
3 5


📝 강의 자료
function solution(arr){
  let answer=[];

  // 얕은 복사
  let sortArr=arr.slice();

  // 정렬
  sortArr.sort((a, b)=>a-b);

  // 다른 것 찾기
  for(let i=0; i<arr.length; i++){
    if(arr[i]!==sortArr[i]) answer.push(i+1);
  }
  return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
*/

// (1) 순서대로 삽입정렬하고 서로 다른 것 찾기
function solution(arr) {
  let result = [];

  // 복사
  let arrCopy = [...arr];

  // 삽입정렬
  for(let i=0; i<arrCopy.length; i++){
    let tmp = arrCopy[i], j;
    for (j = i - 1; j >= 0; j--){
      if (arrCopy[j] > tmp) arrCopy[j + 1] = arrCopy[j];
      else break;
    }
    arrCopy[j + 1] = tmp;
  } 

  // 다른 것 찾기
  for (let i = 0; i < arrCopy.length; i++) {
    if (arr[i] !== arrCopy[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));