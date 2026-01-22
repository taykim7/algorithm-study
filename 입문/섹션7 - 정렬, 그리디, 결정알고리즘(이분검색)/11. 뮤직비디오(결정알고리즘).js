/* 
📝 뮤직비디오(결정알고리즘)
지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다. 
DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다.
순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다.
즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는
1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다.
또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.

지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에
이 사업에 낭비되는 DVD를 가급적 줄이려고 한다.

고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기로 하였다.
이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다.
그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.

▣ 입력설명
첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다.
다음 줄에는 조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다.
부른 곡의 길이는 10,000분을 넘지 않는다고 가정하자.

▣ 출력설명
첫 번째 줄부터 DVD의 최소 용량 크기를 출력하세요.

▣ 입력예제 1 
9 3
1 2 3 4 5 6 7 8 9

▣ 출력예제 1
17

설명 : 3개의 DVD용량이 17분짜리이면
(1, 2, 3, 4, 5) (6, 7), (8, 9)
이렇게 3개의 DVD로 녹음을 할수 있다.
17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.


📝 강의 자료

// 갯수를 세는 메서드 활용
function count(songs, capacity){
  let cnt=1, sum=0;
  for(let x of songs){
    if(sum+x > capacity){
      cnt++;
      sum=x;
    }
    else sum+=x;
  }
  return cnt;
}

function solution(m, songs){

  // lt는 제일긴노래, rt는 총합(reduce를 통해 누적)
  let answer;
  let lt=Math.max(...songs);
  let rt=songs.reduce((a, b)=>a+b, 0);

  // rt가 작아지면 stop
  while(lt<=rt){
  
    // 1. mid 구하기
    let mid=parseInt((lt+rt)/2);

    // 2. count 메서드 활용
    // 갯수가 같거나 작으면 OK → rt 조정 (mid 보다 1 작은 수) 
    if(count(songs, mid)<=m){
      answer=mid;
      rt=mid-1;
    }
    // 갯수가 크면 lt 값 조정 ( mid 보다 1 크 수 )
    else{
      lt=mid+1;
    }

  } 
  return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
*/

// (1) 잘못된 계산같다. 잘못하면 무한반복될듯 ㅅㅂ
function solution(arr, target) {
  let N = arr.length;
  let tot = 0;
  for (let item of arr) {
    tot += item;
  }

  // 최소 제일 긴 시간, 최대 전체 시간, 중간 값
  let left = arr[N - 1];
  let right = tot;
  let mid = Math.floor((left + right) / 2);

  let hap = 0;
  let count = 1;

  // 구할때까지 반복
  while (true) {
    // mid만큼 저장하면 몇개 카운팅되는지 구하기
    for (let item of arr) {
      if ((hap + item) <= mid) {
        hap += item;
      } else {
        count++;
        hap = 0;
      }
    }

    // 목표한 카운팅이 되면 return
    // 아니면 카운트와 합계 초기화
    // right는 중간값 -1
    if (count === target) {
      return mid;
    } else {
      count = 1;
      hap = 0;
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    }
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(arr, 3));

// =================================

// 이분검색을 통해 m개의 디스크당 최소용량을 구하는 알고리즘.

// 음악을 담았을 경우 정해진 용량에 따른 디스크 갯수를 반환하는 판별함수.
function countDisc(musics, capacity) {
  let disc = 1;
  let sum = 0;
  for (const music of musics) {
    if (sum + music > capacity) {
      disc++; // 디스크 한 장 추가
      sum = music; // 새로운 디스크에 현재 음악 용량 추가
    } else {
      sum += music;
    }
  }
  return disc;
}

function solution(m, musics) {
  let answer = 0;
  let left = 0;
  let right = musics.reduce((a, b) => a + b, 0);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = countDisc(musics, mid);
    // 결정 알고리즘
    if (count <= m) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr2));

// ↑ 이진탐색, 판별함수 사용, 결정 알고리즘
// 결정 알고리즘은 입력에 대해 'Yes/No' 형태의 판단을 내리는 알고리즘이다.
