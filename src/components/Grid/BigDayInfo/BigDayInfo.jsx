import React from 'react';
import * as moment from 'moment';
import bigDayInfoStyle from './BigDayInfo.module.scss';

function BigDayInfo(props) {
  // get data from <BigDayBallList />
  let bigDay = props.bigDay;

  // calc restDays
  const endDate = moment(props.bigDay.end);
  const currentDate = moment();
  const restDays = moment(endDate.diff(currentDate, 'days'))._i;

  // differentiate non / hightlight-ball-text
  const diffSizeStyle = bigDay.isHighlight
    ? bigDayInfoStyle['ball-size--l']
    : bigDayInfoStyle['ball-size--s'];

  // color for each ball
  const ballColor = {
    borderBottom: `${bigDay.themeColor} 0.5vw solid`,
  };

  return (
    <div className={`${bigDayInfoStyle['info-container']} ${diffSizeStyle}`}>
      <div className={bigDayInfoStyle['info-rest-day-text']}>
        {restDays}
        <span className={bigDayInfoStyle['info-rest-day-text__unit']}>day</span>
      </div>
      <div className={bigDayInfoStyle['info-date-end']} style={ballColor}>
        {bigDay.end}
      </div>
      <div className={bigDayInfoStyle['info-title']}>{bigDay.title}</div>
      <div className={bigDayInfoStyle['info-description']}>
        {bigDay.description}
      </div>
    </div>
  );
}

export default BigDayInfo;
