import React, { useState, createContext } from 'react';
import { v4 as uuid } from 'uuid';

const BigDayContext = createContext();

const BigDayProvider = (props) => {
  const initBigDayList = [
    {
      id: uuid(),
      title: 'Zelda release',
      begin: '2021.05.01',
      end: '2021.05.28',
      restDays: 28,
      highlightColor: 'pink',
    },
    {
      id: uuid(),
      title: 'Borderlands release',
      begin: '2021.06.01',
      end: '2021.06.14',
      restDays: 14,
      highlightColor: 'hot-pink',
    },
    {
      id: uuid(),
      title: 'Mario release',
      begin: '2021.07.01',
      end: '2021.07.02',
      restDays: 1,
      highlightColor: 'cold-pink',
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
