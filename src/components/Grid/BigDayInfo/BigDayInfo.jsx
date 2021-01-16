import React, { useContext } from 'react';
import { BigDayInfoContext } from '../BigDayBallList/BigDayBallList';
import bigDayInfoStyle from './BigDayInfo.module.scss';

function BigDayInfo() {
  // get data from <BigDayBallList />
  const BigDayInfoConsumer = useContext(BigDayInfoContext);

  // differentiate non / hightlight-ball-text
  const diffSizeStyle = BigDayInfoConsumer.isHighlight
    ? bigDayInfoStyle['ball-size--l']
    : bigDayInfoStyle['ball-size--s'];

  return (
    <div className={`${bigDayInfoStyle['info-container']} ${diffSizeStyle}`}>
      <div className={bigDayInfoStyle['info-rest-day-text']}>
        {BigDayInfoConsumer.restDays}
        <span className={bigDayInfoStyle['info-rest-day-text__unit']}>day</span>
      </div>
      <div className={bigDayInfoStyle['info-date-end']}>
        {BigDayInfoConsumer.end}
      </div>
      <div className={bigDayInfoStyle['info-title']}>
        {BigDayInfoConsumer.title}
      </div>
      <div className={bigDayInfoStyle['info-description']}>
        {BigDayInfoConsumer.description}
      </div>
    </div>
  );
}

export default BigDayInfo;
