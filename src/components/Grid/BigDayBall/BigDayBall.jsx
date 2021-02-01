import React, { useEffect } from 'react';
import * as moment from 'moment';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall(props) {
  // differentiate non / highlight-ball-size
  const diffSizeStyle = props.isHighlight
    ? bigDayBallStyle['ball-size--l']
    : bigDayBallStyle['ball-size--s'];

  // calc restDays => wavePercent
  const getWavePercent = () => {
    const endDate = props.bigDay.id;
    // const restDays = props.bigDay.restDays;
    if (endDate !== 0) {
      console.log(endDate);
    }
  };

  useEffect(() => {
    getWavePercent();
  }, []);

  return (
    <div className={`${bigDayBallStyle['wrapper']} ${diffSizeStyle}`}>
      <div className={bigDayBallStyle['container']}>
        <div className={bigDayBallStyle['wave']}></div>
        {props.children}
      </div>

      {/* TODO: diff color for each ball */}
      <div className={bigDayBallStyle['color']}></div>
    </div>
  );
}

export default BigDayBall;
