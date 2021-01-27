import React from 'react';
import bigDayInfoStyle from './BigDayInfo.module.scss';

function BigDayInfo(props) {
  // get data from <BigDayBallList />
  let bigDay = props.bigDay;

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
        {bigDay.restDays}
        <span className={bigDayInfoStyle['info-rest-day-text__unit']}>day</span>
      </div>
      <div className={bigDayInfoStyle['info-date-end']} style={ballColor}>
        {bigDay.end}
      </div>
      <div className={bigDayInfoStyle['info-title']}>{bigDay.title}</div>
      <div className={bigDayInfoStyle['info-description']}>
        {bigDay.description}
      </div>
      {console.log('bigBallInfo: ', props.bigDay.title)}
    </div>
  );
}

export default BigDayInfo;
