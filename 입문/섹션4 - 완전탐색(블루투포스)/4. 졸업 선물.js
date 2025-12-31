/* 
📝 졸업 선물
선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다.
선생님이 가지고 있는 예산은 한정되어 있습니다.
현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다.
배송비는 할인에 포함되지 않습니다.

▣ 입력설명
첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다.
두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다.
상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.

▣ 출력설명
첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다.
선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.

▣ 입력예제 1
5 28
6 6
2 2
4 3
4 5
10 3

▣ 출력예제 1
4

출력설명
(2, 2), (4, 3), (4, 5)와 (10, 3)를 할인받아 (5, 3)에 사면 비용이 4+7+9+8=28입니다.

자주 틀리는 입력:
console.log(solution(41, [[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]])); // 답 : 5
console.log(solution(41, [[8, 6], [2, 2], [12, 1], [4, 5], [4, 3]])); // 답 : 5
console.log(solution(33, [[2, 12], [8, 4], [6, 6], [6, 7]])); // 답 : 3



📝 강의 자료

// 어떤걸 할인할지 명확하지 않음 ..
// 그러니 모두 탐색을 해야한다고 함
// 그래서 나는 할인된 상품 1개씩 정하고 나머지를 더해서 구했다.
// 문제풀이에서도 하나씩 다 할인하는 방법을 함.

function solution(m, product){
  let answer=0;
  let n=product.length;

  // *** 문제풀이에서는 sort를 활용!
  product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
  // a[0]은 상품가격, a[1]은 배송비 - b[0] 상품가격, b[1]은 배송비
  // 이러면 할인 전 총 비용 낮은 순으로 정렬된다...

  // 할인 받는 상품 반복
  for(let i=0; i<n; i++){
    // 예산(m)에서 할인 받는 현재 상품 가격을 뺌
    let money=m-(product[i][0]/2+product[i][1]);
    let cnt=1;
    
    // 할인 받지 않는 상품 반복
    for(let j=0; j<n; j++){
    
      // 할인 받는 상품과 같지 않아야함
      // 그리고 나머지 예산보다 크면 break
      // 아니면 예산에서 또 빼고 인원 +1 한다.
      if(j!==i && (product[j][0]+product[j][1])>money) break;
      if(j!==i && (product[j][0]+product[j][1])<=money){
        money-=(product[j][0]+product[j][1]);
        cnt++;
      }
    }
    // answer와 cnt 중 더 큰걸 return
    answer=Math.max(answer, cnt);
  }  
  return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
*/

// (1) 문제풀이랑 다르게 배열을 무슨 세개나 더 만들고 풀었다 ㅋㅋㅋㅋ
function solution(yesan, arr) {

  // 할인 후 값 배열
  let discountArr = arr.map((element) => {
    return [element[0] / 2, element[1]];
  })

  // 할인 전 총합 배열
  let arrTot = arr.map((element) => {
    return element[0] + element[1];
  })

  // 할인 후 총합 배열
  let discountArrTot = discountArr.map((element) => {
    return element[0] + element[1];
  })

  // 인원 수
  let n = arr.length;

  // 전체 가격
  let tot = 0;

  do {
    // 할인 받는 상품 반복
    for (let i = 0; i < n; i++) {

      // 할인 받는 상품 1개 더한다.
      tot += discountArrTot[i];

      // 할인 받지 않는 상품 반복
      for (let j = 0; j < n; j++) {

        // 할인 받는 상품과 같으면 패스
        if (i === j) {
          continue;
        }

        // 할인 받지 않는 상품은 다 더해버린다.
        tot += arrTot[j];
      }

      // 합계가 예산보다 같거나 작으면 인원 수를 리턴
      if (tot <= yesan) {
        return n;
        // 아니면 전체 가격 초기화
      } else tot = 0;
    }
    // 아직 예산에 맞는 인원을 구하지 못했으면 할인 후 값이 큰 순으로 뺀다.
    // 할인 후 값이 제일 큰 수의 index를 구해서 각 배열에 제거
    let deleteIndex = discountArrTot.indexOf(Math.max(...discountArrTot));
    arrTot.splice(deleteIndex, 1);
    discountArrTot.splice(deleteIndex, 1);
    // 이제 배열 길이가 -1
    n -= 1;
    // 배열이 0이 되면 끝
    if (n === 0) return 0;
  } while (true);
}
let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));

// 정답은 잘 출력이 되는데 ... 맞는진 모르겠다 ㅠㅠ 존나 어렵네

// =========================

function solution(budget, arr) {
  let answer = 0;
  let n = arr.length;

  // *** 그리디 전략을 위한 정렬
  arr.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
 
  for (let i = 0; i < n; i++) {

    // 남은돈 = 전체돈 - 세일된돈
    let left = budget - (arr[i][0] / 2 + arr[i][1]);
    let totCnt = 1;

    for (let j = 0; j < n; j++) {

      // 같은 상품
      if (i === j) continue;

      const cost = arr[j][0] + arr[j][1];
      
      // 남은 금액보다 크면 안됨
      if (cost > left) break;

      left -= cost;
      totCnt++;

      answer=Math.max(answer, totCnt);
    }
  }

  return answer
}

// console.log(solution(41, [[8, 6], [2, 2], [12, 1], [4, 5], [4, 3]])); // 5
// console.log(solution(41, [[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]])); // 5
// console.log(solution(33, [[2, 12], [8, 4], [6, 6], [6, 7]])); // 3

let arr2 = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr2)); // 4
