function solution(users, emoticons) {
  const usersMap = new Map();
  users.forEach((i, v) => {
    usersMap.set(i, v);
  });

  let answer = [0, 0]; // [가입수, 비용]

  // result로 부터 서비스 가입자수, 이모티콘 구매 비용 계산하는 함수
  const calculateResult = (result) => {
    let serviceJoinCnt = 0; // 서비스 가입자 수
    let totalPrice = 0; // 이모티콘 구매 비용

    for (let i = 0; i < users.length; i++) {
      if (users[i][1] <= result[i]) {
        serviceJoinCnt++;
      } else {
        totalPrice += result[i];
      }
    }
    return [serviceJoinCnt, totalPrice];
  };

  const compareResult = ([serviceJoinCnt, totalPrice]) => {
    if (serviceJoinCnt > answer[0]) {
      answer = [serviceJoinCnt, totalPrice];
      return;
    }
    if (serviceJoinCnt === answer[0]) {
      if (totalPrice > answer[1]) {
        answer[1] = totalPrice;
        return;
      }
    }
    return;
  };

  // 이모티콘마다 할인율 하나씩 적용하면서 DFS로 전수조사
  const DFS = (idx, discount, result) => {
    users.forEach(([dis, pri], i) => {
      if (dis <= discount) {
        // 구매
        result[i] += emoticons[idx] * (1 - discount / 100);
      }
    });
    if (idx === emoticons.length - 1) {
      // 탐색이 끝난 경우
      compareResult(calculateResult(result));
      return;
    }
    DFS(idx + 1, 10, [...result]);
    DFS(idx + 1, 20, [...result]);
    DFS(idx + 1, 30, [...result]);
    DFS(idx + 1, 40, [...result]);
  };

  DFS(0, 10, Array(users.length).fill(0));
  DFS(0, 20, Array(users.length).fill(0));
  DFS(0, 30, Array(users.length).fill(0));
  DFS(0, 40, Array(users.length).fill(0));
  return answer;
}
