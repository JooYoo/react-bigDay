import React, { useContext, useEffect } from 'react';
import * as moment from 'moment';
import { BigDayContext } from '../../../context/GlobalState';
import BigDayItemStyle from './BigDayItem.module.scss';

function BigDayItem(props) {
  // const [bigDayList, setBigDayList] = useContext(BigDayContext);
  const { bigDays, getBigDays, updateBigDays } = useContext(BigDayContext);

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
  const endDate = moment(props.bigDay.end);
  const currentDate = moment();
  const restDays = moment(endDate.diff(currentDate, 'days'))._i;

  // set item highlight style
  let highlightTureStyle = {
    backgroundColor: `${props.bigDay.themeColor}`,
    boxShadow: '0 0 1vw 0.2vw white, 0 0 1vw 0.3vw rgba(255,255,255,0.1)',
  };

  let highlightFalseStyle = {
    backgroundColor: `${props.bigDay.themeColor}`,
    boxShadow: 'unset',
  };

  return (
    <div className={BigDayItemStyle['wrapper']}>
      <div className={BigDayItemStyle['list-item__title-container']}>
        <div
          className={BigDayItemStyle['list-item__title-theme-color']}
          style={
            props.bigDay.isHighlight ? highlightTureStyle : highlightFalseStyle
          }
          onClick={() => toggleIsHiglight(props.bigDay)}
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
          {restDays} / {props.bigDay.totalDays}
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
