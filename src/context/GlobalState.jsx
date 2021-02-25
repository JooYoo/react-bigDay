import React, { useState, createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import { getBigDays } from './bigDay/BigDayActions';
import { v4 as uuid } from 'uuid';

const initState =
  // {
  // bigDays: [],
  // };
  [
    {
      id: uuid(),
      title: 'release new version',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend.',
      begin: '2021.05.03',
      end: '2021.05.05',
      totalDays: 2,
      isHighlight: true,
      themeColor: 'pink',
    },
    {
      id: uuid(),
      title: 'Borderlands release',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
      begin: '2021.02.01',
      end: '2021.02.10',
      totalDays: 8,
      isHighlight: false,
      themeColor: 'blue',
    },
    {
      id: uuid(),
      title: 'Mario release',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
      begin: '2021.02.02',
      end: '2021.02.15',
      totalDays: 12,
      isHighlight: false,
      themeColor: 'red',
    },
    {
      id: uuid(),
      title: 'Zelda release',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
      begin: '2021.02.02',
      end: '2021.02.20',
      totalDays: 17,
      isHighlight: false,
      themeColor: 'yellow',
    },
    {
      id: uuid(),
      title: 'Biohazard release',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
      begin: '2021.02.02',
      end: '2021.02.25',
      totalDays: 22,
      isHighlight: false,
      themeColor: 'purple',
    },
  ];

// create context
const BigDayContext = createContext();
// create provider
const BigDayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  // TODO:
  const [bigDayList, setBigDayList] = useState(initState);

  return (
    <BigDayContext.Provider
      // value={{
      //   bigDays: state.bigDays,
      //   getBigDays: () => getBigDays(dispatch),
      // }}
      value={[bigDayList, setBigDayList]}
    >
      {children}
    </BigDayContext.Provider>
  );
};

export { BigDayContext, BigDayProvider };
