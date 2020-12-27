import React, { useState } from 'react';
import BigDayItem from '../BigDayItem/BigDayItem';
import BigDayForm from '../BigDayForm/BigDayForm';

function BigDayList() {
  const initBigDayList = [
    {
      id: 0,
      title: 'Zelda release',
      begin: '2020/12/12',
      end: '2021/05/01',
    },
    {
      id: 1,
      title: 'Borderlands release',
      begin: '2020/12/12',
      end: '2021/05/01',
    },
    {
      id: 2,
      title: 'Mario release',
      begin: '2020/12/12',
      end: '2021/05/01',
    },
  ];

  const [bigDayList, setBigDayList] = useState(initBigDayList);

  /* ----------------------------- add new BigDay ----------------------------- */
  const addBigDay = (title, begin, end) => {
    const newBigDayList = [
      ...bigDayList,
      {
        title: title,
        begin: begin,
        end: end,
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
      key={index}
      id={index}
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
