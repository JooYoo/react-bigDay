import React, { useContext } from 'react';
import { BigDayContext } from '../../../share/BigDayContext';
import BigDayItem from '../BigDayItem/BigDayItem';
import BigDayForm from '../BigDayForm/BigDayForm';
import { v4 as uuid } from 'uuid';
import BigDayListStyle from './BigDayList.module.scss';

function BigDayList() {
  // get data from context
  const [bigDayList, setBigDayList] = useContext(BigDayContext);

  /* ----------------------------- add new BigDay ----------------------------- */
  const addBigDay = (
    title,
    description,
    begin,
    end,
    restDays,
    highlightColor,
  ) => {
    const newBigDayList = [
      ...bigDayList,
      {
        id: uuid(),
        title: title,
        description: description,
        begin: begin,
        end: end,
        restDays: restDays,
        highlightColor: highlightColor,
      },
    ];

    setBigDayList(newBigDayList);
  };

  /* ------------------------------ remove BigDay ----------------------------- */
  const removeBigDay = (id) => {
    // clone the bigDayList
    const cloneBigDayList = [...bigDayList];
    // remove bigDayItem via filter
    const newBigDays = cloneBigDayList.filter((x) => x.id !== id);
    // update the state
    setBigDayList(newBigDays);
  };

  /* ----------------------- iteration bigDayList items ----------------------- */
  let bigDayItems = bigDayList.map((bigDay, index) => (
    <BigDayItem
      key={bigDay.id}
      id={bigDay.id}
      bigDay={bigDay}
      removeBigDay={removeBigDay}
    />
  ));

  return (
    <div>
      <BigDayForm addBigDay={addBigDay} />
      <hr />
      <div className={BigDayListStyle['list-wrapper']}>
        <div className={BigDayListStyle['list-title']}>List Title</div>
        <div className={BigDayListStyle['list-items-container']}>
          {bigDayItems}
        </div>
      </div>
    </div>
  );
}

export default BigDayList;
