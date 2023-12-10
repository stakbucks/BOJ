// survey 순회
// setScore() 함수에서 각 항목에 대해 점수 메기기

function solution(survey, choices) {
  const map = new Map().set('A', 0).set('N', 0).set('J', 0).set('M', 0).set('C', 0).set('F', 0).set('R', 0).set('T', 0);

  for (let i = 0; i < survey.length; i++) {
    setScore(survey[i], choices[i]);
  }

  let answer = '';

  if (map.get('R') >= map.get('T')) {
    answer += 'R';
  } else {
    answer += 'T';
  }
  if (map.get('C') >= map.get('F')) {
    answer += 'C';
  } else {
    answer += 'F';
  }
  if (map.get('J') >= map.get('M')) {
    answer += 'J';
  } else {
    answer += 'M';
  }
  if (map.get('A') >= map.get('N')) {
    answer += 'A';
  } else {
    answer += 'N';
  }
  return answer;

  function setScore(question, choice) {
    const [disagree, agree] = question.split('');
    switch (choice) {
      case 1:
        map.set(disagree, map.get(disagree) + 3);
        break;
      case 2:
        map.set(disagree, map.get(disagree) + 2);
        break;
      case 3:
        map.set(disagree, map.get(disagree) + 1);
        break;
      case 5:
        map.set(agree, map.get(agree) + 1);
        break;
      case 6:
        map.set(agree, map.get(agree) + 2);
        break;
      case 7:
        map.set(agree, map.get(agree) + 3);
        break;
      default:
        break;
    }
  }
}


