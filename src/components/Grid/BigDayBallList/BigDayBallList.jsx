import React, { useContext, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { BigDayContext } from '../../../context/GlobalState';
import BigDayBall from '../BigDayBall/BigDayBall';
import BigDayInfo from '../BigDayInfo/BigDayInfo';
import bigDayBallListStyle from './BigDayBallList.module.scss';

function BigDayBallList() {
  // get data from BigDayContext
  const { loading, bigDays, getBigDays } = useContext(BigDayContext);

  /* -------------------------- get bigDays from API -------------------------- */

  useEffect(() => {
    getBigDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* --------------------------- non-highlight-balls -------------------------- */

  let nonHighlightBigDayBalls = bigDays.filter(
    (bigDay) => bigDay.isHighlight === false,
  );

  /* ----------------------------- highlight-ball ----------------------------- */

  let highlightBigDayBall = bigDays.filter(
    (bigDay) => bigDay.isHighlight === true,
  );

  /* ---------------------- function for balls iteration ---------------------- */

  const iterateBalls = (balls) => {
    return balls.map((bigDay) => (
      <BigDayBall
        key={bigDay._id}
        isHighlight={bigDay.isHighlight}
        bigDay={bigDay}
      >
        <BigDayInfo bigDay={bigDay} />
      </BigDayBall>
    ));
  };

  return (
    <div className={bigDayBallListStyle['ball-container']}>
      <div className={bigDayBallListStyle['ball-container__loading']}>
        <BeatLoader loading={loading} size={20} color={'white'} />
      </div>

      <div className={bigDayBallListStyle['ball-container--highlight']}>
        {iterateBalls(highlightBigDayBall)}
      </div>

      <div className={bigDayBallListStyle['ball-container--default']}>
        {iterateBalls(nonHighlightBigDayBalls)}
      </div>
    </div>
  );
}

export default BigDayBallList;
