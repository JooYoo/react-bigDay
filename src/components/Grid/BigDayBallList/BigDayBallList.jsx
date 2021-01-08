import React, { useContext } from 'react';
import { BigDayContext } from '../../../share/BigDayContext';
import BigDayBall from '../BigDayBall/BigDayBall';
import bigDayBallListStyle from './BigDayBallList.module.scss';

// pass data to <BigDayInfo /> directly
export const BigDayInfoContext = React.createContext();

function BigDayBallList() {
  // get data from BigDayContext
  const [bigDayList, setBigDayList] = useContext(BigDayContext);

  // iteration bigDayBallList items
  let bigDayBalls = bigDayList.map((bigDay) => (
    <BigDayInfoContext.Provider key={bigDay.id} value={bigDay}>
      <BigDayBall bigDay={bigDay} />
    </BigDayInfoContext.Provider>
  ));

  return <div className={bigDayBallListStyle['container']}>{bigDayBalls}</div>;
}

export default BigDayBallList;
