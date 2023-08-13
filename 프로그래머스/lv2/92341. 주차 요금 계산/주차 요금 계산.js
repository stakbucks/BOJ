function solution(fees, records) {
  const [baseTime, baseRate, unitTime, unitRate] = fees;

  const parked = new Map(); // 현재 주차장 [차량 번호, 입차 시간]
  const record = new Map(); // 과거 출차된 차량 기록 [차량 번호, 누적 시간

  const calcTime = (carNumber, outTime) => {
    const inTime = parked.get(carNumber);
    const inDate = new Date(`2023/12/25 ${inTime}:00`);
    const outDate = new Date(`2023/12/25 ${outTime}:00`);
    const diff = (outDate.getTime() - inDate.getTime()) / (60 * 1000);

    if (record.has(carNumber)) {
      const value = record.get(carNumber);
      record.set(carNumber, value + diff);
    } else {
      record.set(carNumber, diff);
    }
  };
  const calcFee = (time) => {
    if (time <= baseTime) {
      return baseRate;
    }
    return baseRate + Math.ceil((time - baseTime) / unitTime) * unitRate;
  };
  for (const r of records) {
    const [time, carNumber, type] = r.split(' ');
    if (type === 'IN') {
      parked.set(carNumber, time);
    } else {
      calcTime(carNumber, time);
      parked.delete(carNumber);
    }
  }
  for (const [carNumber, inTime] of parked) {
    calcTime(carNumber, '23:59');
    parked.delete(carNumber);
  }

  const answer = [];
  const sortedRecord = [...record].sort((a, b) => a[0] - b[0]);
  for (const [carNumber, time] of sortedRecord) {
    answer.push(calcFee(time));
  }

  return answer;
}
