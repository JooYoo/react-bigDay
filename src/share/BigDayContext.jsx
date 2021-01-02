import React, { useState, createContext } from 'react';

const BigDayContext = createContext();

const BigDayProvider = (props) => {
  const initBigDayList = [
    {
      id: 0,
      title: 'Zelda release',
      begin: '2021.05.01',
      end: '2021.05.02',
      restDays: 1,
    },
    {
      id: 1,
      title: 'Borderlands release',
      begin: '2021.06.01',
      end: '2021.06.02',
      restDays: 1,
    },
    {
      id: 2,
      title: 'Mario release',
      begin: '2021.07.01',
      end: '2021.07.02',
      restDays: 1,
    },
  ];

  const [bigDayList, setBigDayList] = useState(initBigDayList);
  return (
    <BigDayContext.Provider value={[bigDayList, setBigDayList]}>
      {props.children}
    </BigDayContext.Provider>
  );
};

export { BigDayContext, BigDayProvider };
