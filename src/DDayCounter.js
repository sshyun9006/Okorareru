import React, { useState, useEffect } from 'react';
import './index.css';

const DDayCounter = () => {
  const dDayDate = new Date('2025-12-31T00:00:00');

  // 현재 날짜와 D-Day 날짜 간의 차이를 계산하는 함수
  const calculateRemainingDays = () => {
    const currentDate = new Date();
    const timeDifference = dDayDate.getTime() - currentDate.getTime();
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return remainingDays;
  };

  // 상태 변수 설정
  const [remainingDays, setRemainingDays] = useState(calculateRemainingDays);

  // 1초마다 남은 일수 업데이트
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingDays(calculateRemainingDays);
    }, 1000);

    // 컴포넌트가 언마운트될 때 인터벌 해제
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='dday-container' style={{fontFamily:"JejuMyeongjo", marginTop: "30px"}}>
      D-{remainingDays}
    </div>
  );
};

export default DDayCounter;