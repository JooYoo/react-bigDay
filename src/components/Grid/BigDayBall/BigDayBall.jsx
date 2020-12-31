import React, { useContext } from 'react';
import { BigDayContext } from '../../../share/BigDayContext';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall() {
  // get data from BigDayContext
  const [bigDayList, setBigDayList] = useContext(BigDayContext);

  return (
    <div>
      <div className={bigDayBallStyle['container']}>
        <div className={bigDayBallStyle['wave']}></div>
      </div>
      <h4>{bigDayList.length}</h4>
    </div>
  );
}

export default BigDayBall;
