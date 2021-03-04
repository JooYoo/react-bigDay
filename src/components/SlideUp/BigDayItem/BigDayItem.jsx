import React, { useContext, useEffect } from 'react';
import * as moment from 'moment';
import { BigDayContext } from '../../../context/GlobalState';
import BigDayItemStyle from './BigDayItem.module.scss';

function BigDayItem({ bigDay }) {
  // get data from context
  const { bigDays, getBigDays, updateBigDays, deleteBigDay } = useContext(
    BigDayContext,
  );

  useEffect(() => {
    getBigDays();
  }, []);

  const toggleIsHiglight = (bigDay) => {
    // clone bigDayList
    let newBigDays = [...bigDays];

    // set this item highlight = true
    let selectedItem = newBigDays.find((item) => item.id === bigDay.id);
    selectedItem.isHighlight = true;

    // set others highlight = false
    newBigDays.forEach((item) => {
      if (item.id === selectedItem.id) {
        return;
      }
      item.isHighlight = false;
    });

    // update state
    updateBigDays(newBigDays);
  };

  // calc restDays
  const endDate = moment(bigDay.end);
  const currentDate = moment();
  const restDays = moment(endDate.diff(currentDate, 'days'))._i;

  // set item highlight style
  let highlightTureStyle = {
    backgroundColor: `${bigDay.themeColor}`,
    boxShadow: '0 0 1vw 0.2vw white, 0 0 1vw 0.3vw rgba(255,255,255,0.1)',
  };

  let highlightFalseStyle = {
    backgroundColor: `${bigDay.themeColor}`,
    boxShadow: 'unset',
  };

  return (
    <div className={BigDayItemStyle['wrapper']}>
      <div className={BigDayItemStyle['list-item__title-container']}>
        <div
          className={BigDayItemStyle['list-item__title-theme-color']}
          style={bigDay.isHighlight ? highlightTureStyle : highlightFalseStyle}
          onClick={() => toggleIsHiglight(bigDay)}
        ></div>
        <div className={BigDayItemStyle['list-item__title']}>
          {bigDay.title}
        </div>
      </div>
      <div className={BigDayItemStyle['list-item__date-main-wrapper']}>
        <div className={BigDayItemStyle['list-item__date-wrapper']}>
          <div className={BigDayItemStyle['list-item__date--start']}>
            {bigDay.begin}
          </div>
          <div className={BigDayItemStyle['list-item__date--end']}>
            {bigDay.end}
          </div>
        </div>
        <div className={BigDayItemStyle['list-item__date--rest-days']}>
          {restDays} / {bigDay.totalDays}
        </div>
      </div>
      <button
        className={BigDayItemStyle['list-item__btn']}
        onClick={() => deleteBigDay(bigDay._id)}
      >
        remove
      </button>
    </div>
  );
}

export default BigDayItem;
