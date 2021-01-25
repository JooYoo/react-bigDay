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

  /* --------------------------- non-highlight-balls -------------------------- */

  // get non-highlight-balls
  let nonHighlightBigDayBalls = bigDayList.filter(
    (bigDay) => bigDay.isHighlight === false,
  );

  // iteration non-highlight-balls
  let bigDayBalls = nonHighlightBigDayBalls.map((bigDay) => (
    <BigDayInfoProvider key={bigDay.id} value={bigDay}>
      <BigDayBall bigDay={bigDay} />
    </BigDayInfoProvider>
  ));

  /* ----------------------------- highlight-ball ----------------------------- */

  // get the highLight bigDay
  let hBigDay = bigDayList.find((bigDay) => bigDay.isHighlight === true);

  return (
    <div className={bigDayBallListStyle['ball-container']}>
      <div className={bigDayBallListStyle['ball-container--highlight']}>
        <BigDayInfoProvider value={hBigDay}>
          {/* DEV:  */}
          {/* <BigDayBall bigDay={hBigDay} /> */}
        </BigDayInfoProvider>
      </div>

      <div className={bigDayBallListStyle['ball-container--default']}>
        {/* DEV:  */}
        {/* {bigDayBalls} */}
      </div>
    </div>
  );
}

export default BigDayBallList;
