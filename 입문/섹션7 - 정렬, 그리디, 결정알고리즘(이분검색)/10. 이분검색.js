/* 
📝 이분검색
임의의 N개의 숫자가 입력으로 주어집니다.
N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면
이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요.
단 중복값은 존재하지 않습니다.

▣ 입력설명
첫 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어집니다.
두 번째 줄에 N개의 수가 공백을 사이에 두고 주어집니다.

▣ 출력설명
첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.

▣ 입력예제 1 
8 32
23 87 65 12 57 32 99 81

▣ 출력예제 1
3

* 이분검색이란?
이분검색은 무조건 정렬되어있어야함.
left 포인트 1개, right 포인트 1개가 필요함.
mid는 left의 인덱스와 right 인덱스를 더한 값의 나누기 2
만약 mid의 인덱스가 target이 아니면 left나 right의 값을 변경해가며 찾음
mid가 target보다 크면 left쪽을 찾음
right를 mid-1로 변경
그리고 또 mid를 구함 ... 반복
즉, 검색범위를 줄이니 시간 복잡도를 줄임.

그냥 탐색은 처음부터 뒤까지 찾으니 시간 복잡도가 O(n)이면,
이분 검색은 절반만 찾으니 O(log2n)

📝 강의 자료

function solution(target, arr){
  // 정렬, lt, rt 값 정하기
  let answer;
  arr.sort((a, b)=>a-b);
  let lt=0, rt=arr.length-1;

  // 반복
  while(lt<=rt){
    // mid 구하기
    let mid=parseInt((lt+rt)/2);
    // mid가 맞으면 break
    if(arr[mid]===target){
      answer=mid+1;
      break;
    }
    // arr[mid]가 크면 rt 변경
    else if(arr[mid]>target) rt=mid-1;
    // 아니면 lt 변경
    else lt=mid+1;
  }
  
  return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
*/

// (1) 이분 검색 처음 알았지만 찰 푼 것 같다.
function solution(arr, target) {

  // left, right, mid 정의, 정렬
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  arr.sort((a, b) => { return a - b });

  // arr[mid]가 정답일때까지 반복
  while (arr[mid] !== target) {
    if (arr[mid] === target) {
      return mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid=Math.floor((left + right) / 2);
  }
  return mid + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(arr, 32));
