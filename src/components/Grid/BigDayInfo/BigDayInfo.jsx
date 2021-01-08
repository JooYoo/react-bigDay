import React, { useContext } from 'react';
import { BigDayInfoContext } from '../BigDayBallList/BigDayBallList';
import bigDayInfoStyle from './BigDayInfo.module.scss';

function BigDayInfo() {
  // get data from <BigDayBallList />
  const bigDayInfo = useContext(BigDayInfoContext);

  return (
    <div>
      <div className={bigDayInfoStyle['info-container']}>
        <div className={bigDayInfoStyle['info-rest-day-text']}>
          {bigDayInfo.restDays}
          <span className={bigDayInfoStyle['info-rest-day-text__unit']}>
            day
          </span>
        </div>
        <div className={bigDayInfoStyle['info-date-end']}>{bigDayInfo.end}</div>
        <div className={bigDayInfoStyle['info-title']}>{bigDayInfo.title}</div>
      </div>
    </div>
  );
}

export default BigDayInfo;
