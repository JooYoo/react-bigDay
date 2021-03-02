import React, { useContext, useEffect } from 'react';
import { BigDayContext } from '../../../context/GlobalState';
import BigDayItem from '../BigDayItem/BigDayItem';
import BigDayForm from '../BigDayForm/BigDayForm';
import { v4 as uuid } from 'uuid';
import BigDayListStyle from './BigDayList.module.scss';

function BigDayList() {
  // get data from context
  const { bigDays, getBigDays, postBigDay, deleteBigDay } = useContext(
    BigDayContext,
  );

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
      id: uuid(),
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

  /* ------------------------------ remove BigDay ----------------------------- */
  const removeBigDay = (id) => {
    deleteBigDay(id);
  };

  // console.log(bigDays);

  /* ----------------------- iteration bigDayList items ----------------------- */
  let bigDayItems = bigDays.map((bigDay) => (
    <BigDayItem
      key={bigDay._id}
      id={bigDay.id}
      bigDay={bigDay}
      removeBigDay={removeBigDay}
    />
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
