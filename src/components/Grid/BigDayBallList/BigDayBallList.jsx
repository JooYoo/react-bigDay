import React, { useContext, createContext } from 'react';
import { BigDayContext } from '../../../share/BigDayContext';
import BigDayBall from '../BigDayBall/BigDayBall';
import bigDayBallListStyle from './BigDayBallList.module.scss';

// pass data to <BigDayInfo /> directly
export const BigDayInfoContext = createContext();
const BigDayInfoProvider = BigDayInfoContext.Provider;

function BigDayBallList() {
  // get data from BigDayContext
  const [bigDayList, setBigDayList] = useContext(BigDayContext);

  // iteration bigDayBallList items
  let bigDayBalls = bigDayList.map((bigDay) => (
    <BigDayInfoProvider key={bigDay.id} value={bigDay}>
      <BigDayBall bigDay={bigDay} />
    </BigDayInfoProvider>
  ));

  return <div className={bigDayBallListStyle['container']}>{bigDayBalls}</div>;
}

export default BigDayBallList;
