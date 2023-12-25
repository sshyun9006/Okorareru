import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './index.css';

const DDayCounter = () => {
  const dDayDate = '2025-12-01'; // D-day로 설정하려는 날짜

  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const now = moment();
    const dDay = moment(dDayDate);
    const duration = moment.duration(dDay.diff(now));

    const hours = duration.asHours().toFixed(0);
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    setTimeLeft(
      `D-${hours > 0 ? `${hours}시간 ` : ''}${minutes}분 ${seconds}초`
    );

    const intervalId = setInterval(() => {
      const newDuration = moment.duration(dDay.diff(moment()));
      const newHours = newDuration.asHours().toFixed(0);
      const newMinutes = newDuration.minutes();
      const newSeconds = newDuration.seconds();

      setTimeLeft(`D-${newHours > 0 ? `${newHours}시간 ` : ''}${newMinutes}분 ${newSeconds}초`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dDayDate]);

  return (
    <div className='dday-container'>
      <p>{timeLeft}</p>
    </div>
  );
};

export default DDayCounter;