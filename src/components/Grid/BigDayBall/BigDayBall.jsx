import React from 'react';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall() {
  return (
    <div className={bigDayBallStyle['container']}>
      <div className={bigDayBallStyle['wave']}></div>
    </div>
  );
}

export default BigDayBall;
