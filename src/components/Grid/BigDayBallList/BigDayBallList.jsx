import React, { useContext } from 'react';
import { BigDayContext } from '../../../share/BigDayContext';
import BigDayBall from '../BigDayBall/BigDayBall';
import bigDayBallListStyle from './BigDayBallList.module.scss';

function BigDayBallList() {
  // get data from BigDayContext
  const [bigDayList, setBigDayList] = useContext(BigDayContext);

  // iteration bigDayBallList items
  let bigDayBalls = bigDayList.map((bigDay, index) => (
    <BigDayBall key={index} bigDay={bigDay} />
  ));

  return <div className={bigDayBallListStyle['container']}>{bigDayBalls}</div>;
}

export default BigDayBallList;
