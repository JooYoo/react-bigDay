import React from 'react';
import BigDayItemStyle from './BigDayItem.module.scss';

function BigDayItem(props) {
  return (
    <div className={BigDayItemStyle['wrapper']}>
      <div className={BigDayItemStyle['list-item__title-container']}>
        <div
          className={BigDayItemStyle['list-item__title-theme-color']}
          style={{ backgroundColor: `${props.bigDay.themeColor}` }}
        ></div>
        <div className={BigDayItemStyle['list-item__title']}>
          {props.bigDay.title}
        </div>
      </div>
      <div className={BigDayItemStyle['list-item__date-main-wrapper']}>
        <div className={BigDayItemStyle['list-item__date-wrapper']}>
          <div className={BigDayItemStyle['list-item__date--start']}>
            {props.bigDay.begin}
          </div>
          <div className={BigDayItemStyle['list-item__date--end']}>
            {props.bigDay.end}
          </div>
        </div>
        <div className={BigDayItemStyle['list-item__date--rest-days']}>
          {props.bigDay.restDays}
        </div>
      </div>
      <button
        className={BigDayItemStyle['list-item__btn']}
        onClick={() => props.removeBigDay(props.id)}
      >
        remove
      </button>
    </div>
  );
}

export default BigDayItem;
