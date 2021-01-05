import React, { useContext } from 'react';
import { BigDayContext } from '../../../share/BigDayContext';
import BigDayItem from '../BigDayItem/BigDayItem';
import BigDayForm from '../BigDayForm/BigDayForm';

function BigDayList() {
  // get data from context
  const [bigDayList, setBigDayList] = useContext(BigDayContext);

  /* ----------------------------- add new BigDay ----------------------------- */
  const addBigDay = (title, begin, end, restDays, highlightColor) => {
    const newBigDayList = [
      ...bigDayList,
      {
        title: title,
        begin: begin,
        end: end,
        restDays: restDays,
        highlightColor: highlightColor,
      },
    ];

    setBigDayList(newBigDayList);
  };

  /* ------------------------------ remove BigDay ----------------------------- */
  const removeBigDay = (index) => {
    // clone the bigDayList
    const newBigDayList = [...bigDayList];
    // remove bigDayItem via index
    newBigDayList.splice(index, 1);
    // update the state
    setBigDayList(newBigDayList);
  };

  /* ----------------------- iteration bigDayList items ----------------------- */
  let bigDays = bigDayList.map((bigDay, index) => (
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
      {bigDays}
    </div>
  );
}

export default BigDayList;
