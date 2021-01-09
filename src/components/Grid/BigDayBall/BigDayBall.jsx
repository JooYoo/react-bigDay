import React from 'react';
import BigDayInfo from '../BigDayInfo/BigDayInfo';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall(props) {
  return (
    <div className={bigDayBallStyle['wrapper']}>
      <div className={bigDayBallStyle['container']}>
        <div className={bigDayBallStyle['wave']}></div>
      </div>
      <BigDayInfo />

      {/* DEV: transfer to the color of Ball */}
      {/* <div>{props.bigDay.themeColor}</div> */}
    </div>
  );
}

export default BigDayBall;
