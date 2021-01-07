import React from 'react';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall(props) {
  return (
    <div>
      <div className={bigDayBallStyle['container']}>
        <div className={bigDayBallStyle['wave']}></div>
      </div>
      <div className={bigDayBallStyle['info-container']}>
        <div className={bigDayBallStyle['info-rest-day-text']}>
          {props.bigDay.restDays}
          <span className={bigDayBallStyle['info-rest-day-text__unit']}>
            day
          </span>
        </div>
        <div className={bigDayBallStyle['info-date-end']}>
          {props.bigDay.end}
        </div>
        <div className={bigDayBallStyle['info-title']}>
          {props.bigDay.title}
        </div>
      </div>

      {/* DEV: transfer to color */}
      <div>{props.bigDay.highlightColor}</div>
    </div>
  );
}

export default BigDayBall;
