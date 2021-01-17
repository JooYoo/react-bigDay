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
    isHighlight: true,
    themeColor: 'pink',
  },
  {
    id: uuid(),
    title: 'Borderlands release',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
    begin: '2021.06.01',
    end: '2021.06.14',
    restDays: 14,
    isHighlight: false,
    themeColor: 'hot-pink',
  },
  {
    id: uuid(),
    title: 'Mario release',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
    begin: '2021.07.01',
    end: '2021.07.02',
    restDays: 1,
    isHighlight: false,
    themeColor: 'cold-pink',
  },
  {
    id: uuid(),
    title: 'Zelda release',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
    begin: '2021.12.01',
    end: '2021.12.10',
    restDays: 10,
    isHighlight: false,
    themeColor: 'cold-pink',
  },
  {
    id: uuid(),
    title: 'Biohazard release',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
    begin: '2021.12.15',
    end: '2021.12.30',
    restDays: 15,
    isHighlight: false,
    themeColor: 'cold-pink',
  },
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
