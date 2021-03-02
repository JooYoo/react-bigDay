import React, { useContext, useEffect } from 'react';
import { BigDayContext } from '../../../context/GlobalState';
import BigDayBall from '../BigDayBall/BigDayBall';
import BigDayInfo from '../BigDayInfo/BigDayInfo';
import bigDayBallListStyle from './BigDayBallList.module.scss';

function BigDayBallList() {
  // get data from BigDayContext
  const { bigDays, getBigDays } = useContext(BigDayContext);

  /* -------------------------- get bigDays from API -------------------------- */

  useEffect(() => {
    getBigDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: refactoring combine two thing situation to one
  /* --------------------------- non-highlight-balls -------------------------- */

  // get non-highlight-balls
  let nonHighlightBigDayBalls = bigDays.filter(
    (bigDay) => bigDay.isHighlight === false,
  );

  // iteration non-highlight-balls
  let bigDayBalls = nonHighlightBigDayBalls.map((bigDay) => (
    <BigDayBall key={bigDay._id} isHighlight={false} bigDay={bigDay}>
      <BigDayInfo bigDay={bigDay} />
    </BigDayBall>
  ));

  /* ----------------------------- highlight-ball ----------------------------- */

  // get highlight-ball
  let highlightBigDayBall = bigDays.filter(
    (bigDay) => bigDay.isHighlight === true,
  );

  // iteration highlight-ball
  let highlightBigDayBalls = highlightBigDayBall.map((bigDay) => (
    <BigDayBall key={bigDay._id} isHighlight={true} bigDay={bigDay}>
      <BigDayInfo bigDay={bigDay} />
    </BigDayBall>
  ));

  return (
    <div className={bigDayBallListStyle['ball-container']}>
      <div className={bigDayBallListStyle['ball-container--highlight']}>
        {highlightBigDayBalls}
      </div>

      <div className={bigDayBallListStyle['ball-container--default']}>
        {bigDayBalls}
      </div>
    </div>
  );
}

export default BigDayBallList;
