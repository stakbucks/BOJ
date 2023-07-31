function solution(p) {
  const isCorrectString = (str) => {
    // '올바른 괄호 문자열'인지 판별
    if (!str.length) return true; // 빈 문자열인 경우
    const stack = [...str];
    let closeCnt = 0;
    while (stack.length) {
      const value = stack.pop();
      if (value === ')') {
        closeCnt++;
      } else {
        if (!closeCnt) return false;
        closeCnt--;
      }
    }
    return true;
  };

  const divide = (w) => {
    // w를 u,v로 쪼개는 함수
    const u = [];
    const v = [...w];
    let openCnt = 0;
    let closeCnt = 0;
    while (1) {
      const value = v.shift();
      if (value === '(') {
        openCnt++;
      } else {
        closeCnt++;
      }
      u.push(value);
      if (openCnt === closeCnt) {
        return [u.join(''), v.join('')];
      }
    }
  };

  const changeU = (u, v) => {
    const temp = [...u].map((v, i) => {
      if (i !== 0 && i !== u.length - 1) {
        if (v === '(') {
          return ')';
        } else {
          return '(';
        }
      } else return '';
    });
    return '(' + v + ')' + temp.join('');
  };

  const convert = (p) => {
      let answer=""
    if (!p.length) return "";
    if (!isCorrectString(p)) {
      const [u, v] = divide(p);
      if (isCorrectString(u)) {
        // u가 '올바른 괄호 문자열'인 경우
        answer+=u;
        answer+=convert(v);
      } else {
        answer+=changeU(u, convert(v));
      }
    } else {
      return p;
    }
    return answer;
  };
  return convert(p);
}
