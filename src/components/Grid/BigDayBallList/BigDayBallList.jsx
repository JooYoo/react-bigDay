import React, { useContext } from 'react';
import { BigDayContext } from '../../../share/BigDayContext';
import BigDayBall from '../BigDayBall/BigDayBall';
import bigDayBallListStyle from './BigDayBallList.module.scss';

function BigDayBallList() {
  // get data from BigDayContext
  const [bigDayBallList, setBigDayBallList] = useContext(BigDayContext);

  // iteration bigDayBallList items
  let bigDayBalls = bigDayBallList.map((bigDayBall, index) => (
    <BigDayBall key={index} title={bigDayBall.title} />
  ));

  return <div className={bigDayBallListStyle['container']}>{bigDayBalls}</div>;
}

export default BigDayBallList;
