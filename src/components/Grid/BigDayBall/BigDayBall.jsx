import React from 'react';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall(props) {
  return (
    <div>
      <div className={bigDayBallStyle['container']}>
        <div className={bigDayBallStyle['wave']}></div>
      </div>
      <div>{props.title}</div>
    </div>
  );
}

export default BigDayBall;
