import React, { useContext } from 'react';
import { BigDayContext } from '../../../context/GlobalState';
import BigDayBall from '../BigDayBall/BigDayBall';
import BigDayInfo from '../BigDayInfo/BigDayInfo';
import bigDayBallListStyle from './BigDayBallList.module.scss';

function BigDayBallList() {
  // get data from BigDayContext
  const [bigDayList, setBigDayList] = useContext(BigDayContext);

  /* --------------------------- non-highlight-balls -------------------------- */

  // get non-highlight-balls
  let nonHighlightBigDayBalls = bigDayList.filter(
    (bigDay) => bigDay.isHighlight === false,
  );

  // iteration non-highlight-balls
  let bigDayBalls = nonHighlightBigDayBalls.map((bigDay) => (
    //  DEV:
    <BigDayBall key={bigDay.id} isHighlight={false} bigDay={bigDay}>
      <BigDayInfo bigDay={bigDay} />
    </BigDayBall>
  ));

  /* ----------------------------- highlight-ball ----------------------------- */

  // get the highLight bigDay
  let hBigDay = bigDayList.find((bigDay) => bigDay.isHighlight === true);

  return (
    <div className={bigDayBallListStyle['ball-container']}>
      <div className={bigDayBallListStyle['ball-container--highlight']}>
        {/* DEV:  */}
        <BigDayBall isHighlight={true} bigDay={hBigDay}>
          <BigDayInfo bigDay={hBigDay} />
        </BigDayBall>
      </div>

      <div className={bigDayBallListStyle['ball-container--default']}>
        {bigDayBalls}
        <div>{console.log('non')}</div>
      </div>
    </div>
  );
}

export default BigDayBallList;
