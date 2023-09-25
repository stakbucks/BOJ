function solution(info, query) {
  const map = new Map();
  for (const applicant of info) {
    // DFS(0, [], applicant.split(' '));
    const arr = applicant.split(' ');
    const language = ['-', arr[0]];
    const jobGroup = ['-', arr[1]];
    const career = ['-', arr[2]];
    const soulFood = ['-', arr[3]];

    for (const l of language) {
      let str1 = l;
      for (const j of jobGroup) {
        let str2 = str1 + j;
        for (const c of career) {
          let str3 = str2 + c;
          for (const s of soulFood) {
            let str4 = str3 + s;
            map.set(str4, Number(arr[4]));
          }
        }
      }
    }
  }
  // function DFS(i, temp, arr) {
  //   if (i === 4) {
  //     const prev = map.get(temp.join('')) || [];
  //     map.set(temp.join(''), [...prev, Number(arr[4])]);
  //     return;
  //   }
  //   DFS(i + 1, [...temp, '-'], arr); // -
  //   DFS(i + 1, [...temp, arr[i]], arr); // 인덱스
  // }
  for (const [key, value] of map) {
    map.set(
      key,
      value.sort((a, b) => a - b),
    );
  }
  const answer = [];
  for (const q of query) {
    const arr = q.split(' and ');
    const str = arr[0] + arr[1] + arr[2] + arr[3].split(' ')[0];
    const result = map.get(str) || [];
    const count = binarySearch(result, Number(arr[3].split(' ')[1]));
    answer.push(count);
  }
  function binarySearch(arr, target) {
    if (!arr) return 0;
    let left = 0;
    let right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= target) right = mid;
      else left = mid + 1;
    }
    return arr.length - left;
  }
  return answer;
}

function solution(info, query) {
  var answer = [];
  let map = {};

  function combination(infos, score, map, start) {
    let key = infos.join(''); //키 값으로 쓸거 합쳐주기
    let value = map[key]; //값 있는지 없는지 확인해주기

    if (value) {
      //값이 있으면 push
      map[key].push(score);
    } else {
      //값이 없으면 프로퍼티 만들어줘야 됨
      map[key] = [score];
    }
    //여기서는 - 를 이용해 조합 만들어주기
    for (let i = start; i < infos.length; i++) {
      let combiArr = [...infos]; //전개 연산자
      combiArr[i] = '-';
      combination(combiArr, score, map, i + 1);
    }
  }

  function binarySearch(map, key, score) {
    let scoreArr = map[key];

    if (scoreArr) {
      let start = 0;
      let end = scoreArr.length;
      while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (scoreArr[mid] >= score) {
          //현재 가르키는 값보다 내가 찾는 값이
          end = mid;
        } else if (scoreArr[mid] < score) {
          start = mid + 1;
        }
      }
      return scoreArr.length - start;
    } else return 0;
  }

  for (let i = 0; i < info.length; i++) {
    let infos = info[i].split(' ');
    let score = infos.pop();
    combination(infos, score, map, 0);
  }

  for (let key in map) {
    map[key].sort((o1, o2) => o1 - o2);
  }

  for (let i = 0; i < query.length; i++) {
    let querys = query[i].replace(/ and /g, '').split(' ');
    let score = Number(querys.pop());
    answer.push(binarySearch(map, querys.join(''), score));
  }

  return answer;
}
