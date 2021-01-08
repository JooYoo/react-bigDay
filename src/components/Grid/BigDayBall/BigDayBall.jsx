import React from 'react';
import BigDayInfo from '../BigDayInfo/BigDayInfo';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall(props) {
  return (
    <div>
      <div className={bigDayBallStyle['container']}>
        <div className={bigDayBallStyle['wave']}></div>
      </div>

      <BigDayInfo />

      {/* DEV: transfer to the color of Ball */}
      <div>{props.bigDay.highlightColor}</div>
    </div>
  );
}

export default BigDayBall;
