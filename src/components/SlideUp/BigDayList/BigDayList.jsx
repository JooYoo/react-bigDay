import React, { useContext, useEffect } from 'react';
import { BigDayContext } from '../../../context/GlobalState';
import BigDayItem from '../BigDayItem/BigDayItem';
import BigDayForm from '../BigDayForm/BigDayForm';
import BigDayListStyle from './BigDayList.module.scss';

function BigDayList() {
  // get data from context
  const { bigDays, getBigDays, postBigDay } = useContext(BigDayContext);

  /* ------------------------------- get BigDays ------------------------------ */
  useEffect(() => {
    getBigDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ----------------------------- add new BigDay ----------------------------- */
  const addBigDay = (
    title,
    description,
    begin,
    end,
    totalDays,
    highlightColor,
  ) => {
    const newBigDay = {
      title: title,
      description: description,
      begin: begin,
      end: end,
      totalDays: totalDays,
      isHighlight: false,
      themeColor: highlightColor,
    };

    postBigDay(newBigDay);
  };

  /* ----------------------- iteration bigDayList items ----------------------- */
  let bigDayItems = bigDays.map((bigDay) => (
    <BigDayItem key={bigDay._id} bigDay={bigDay} />
  ));

  return (
    <div className={BigDayListStyle['wrapper']}>
      <BigDayForm addBigDay={addBigDay} />

      <div className={BigDayListStyle['container']}>
        <div className={BigDayListStyle['list-title']}>List Title</div>
        <div className={BigDayListStyle['list-items-container']}>
          {bigDayItems}
        </div>
      </div>
    </div>
  );
}

export default BigDayList;
