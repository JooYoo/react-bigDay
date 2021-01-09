import React, { useState, createContext } from 'react';
import { v4 as uuid } from 'uuid';

const initBigDayList = [
  {
    id: uuid(),
    title: 'release new version',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend.',
    begin: '2021.05.01',
    end: '2021.05.28',
    restDays: 999,
    isHighlight: false,
    themeColor: 'pink',
  },
  // DEV: bigDayInfo styling
  // {
  //   id: uuid(),
  //   title: 'Borderlands release',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
  //   begin: '2021.06.01',
  //   end: '2021.06.14',
  //   restDays: 14,
  //   isHighlight: true,
  //   themeColor: 'hot-pink',
  // },
  // {
  //   id: uuid(),
  //   title: 'Mario release',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
  //   begin: '2021.07.01',
  //   end: '2021.07.02',
  //   restDays: 1,
  //   isHighlight: false,
  //   themeColor: 'cold-pink',
  // },
];

const BigDayContext = createContext();

const BigDayProvider = (props) => {
  const [bigDayList, setBigDayList] = useState(initBigDayList);

  return (
    <BigDayContext.Provider value={[bigDayList, setBigDayList]}>
      {props.children}
    </BigDayContext.Provider>
  );
};

export { BigDayContext, BigDayProvider };
