import React from 'react';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall(props) {
  return (
    <div>
      <div className={bigDayBallStyle['container']}>
        <div className={bigDayBallStyle['wave']}></div>
      </div>
      <div>{props.bigDay.title}</div>
      <div>
        {props.bigDay.begin} ~ {props.bigDay.end}
      </div>
      <div>{props.bigDay.restDays}</div>
      <div>{props.bigDay.highlightColor}</div>
    </div>
  );
}

export default BigDayBall;
