import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import {
  getBigDays,
  updateBigDay,
  postBigDay,
  deleteBigDay,
} from './bigDay/BigDayActions';
import { v4 as uuid } from 'uuid';

const initState = {
  // bigDays: [
  //   {
  //     id: uuid(),
  //     title: 'release new version',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend.',
  //     begin: '2021.05.03',
  //     end: '2021.05.05',
  //     totalDays: 2,
  //     isHighlight: true,
  //     themeColor: 'pink',
  //   },
  //   {
  //     id: uuid(),
  //     title: 'Borderlands release',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
  //     begin: '2021.02.01',
  //     end: '2021.02.10',
  //     totalDays: 8,
  //     isHighlight: false,
  //     themeColor: 'blue',
  //   },
  //   {
  //     id: uuid(),
  //     title: 'Mario release',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend lectus nec accumsan.',
  //     begin: '2021.02.02',
  //     end: '2021.02.15',
  //     totalDays: 12,
  //     isHighlight: false,
  //     themeColor: 'red',
  //   },
  // ],
  bigDays: [],
  error: null,
  loading: true,
};

// create context
const BigDayContext = createContext(initState);

// create provider
const BigDayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return (
    <BigDayContext.Provider
      value={{
        bigDays: state.bigDays,
        loading: state.loading,
        error: state.error,
        getBigDays: () => getBigDays(dispatch),
        updateBigDay: (id, newBigDay) => updateBigDay(id, newBigDay, dispatch),
        postBigDay: (newBigDay) => postBigDay(newBigDay, dispatch),
        deleteBigDay: (id) => deleteBigDay(id, dispatch),
      }}
    >
      {children}
    </BigDayContext.Provider>
  );
};

export { BigDayContext, BigDayProvider };
