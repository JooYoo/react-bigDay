import React, { useState, useEffect } from 'react';
import * as moment from 'moment';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall(props) {
  // differentiate non / highlight-ball-size
  const diffSizeStyle = props.isHighlight
    ? bigDayBallStyle['ball-size--l']
    : bigDayBallStyle['ball-size--s'];

  // wavePercent
  const [wavePercent, setWavePercent] = useState('');

  // calc restDays => wavePercent
  const getWavePercent = () => {
    const startDate = moment(props.bigDay.begin);
    const endDate = moment(props.bigDay.end);
    const currentDate = moment();

    // calc totalDays
    const totalDays = moment(endDate.diff(startDate, 'days'))._i;
    // calc restDays
    const restDays = moment(endDate.diff(currentDate, 'days'))._i;

    // check if startDate is future date
    startDate.isAfter(currentDate)
      ? setWavePercent('0%')
      : setWavePercent(`${100 - (restDays / totalDays).toFixed(2) * 100}%`);

    // TODO: skip preview-ball
    if (props.bigDay.id !== 0) {
    }
  };

  useEffect(() => {
    // skip preview-ball  TODO: why render twice
    if (props.bigDay.id !== 0) {
      getWavePercent();
    }
  }, [wavePercent]);

  return (
    <div className={`${bigDayBallStyle['wrapper']} ${diffSizeStyle}`}>
      <div className={bigDayBallStyle['container']}>
        <div
          className={bigDayBallStyle['wave']}
          style={{ '--wave-percent': `${wavePercent}` }}
        ></div>
        {props.children}
      </div>

      <div className={bigDayBallStyle['color']}></div>
    </div>
  );
}

export default BigDayBall;
