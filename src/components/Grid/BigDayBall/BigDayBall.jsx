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
    const startDate = moment(props.bigDay.begin);
    const endDate = moment(props.bigDay.end);
    const currentDate = moment();

    // get restDays
    const restDays = moment(endDate.diff(currentDate, 'days'))._i;

    // calc wavePercent
    const totalDays = props.bigDay.totalDays;
    let wavePercent = '';
    // check if startDate is future date
    startDate.isAfter(currentDate)
      ? (wavePercent = '100%')
      : (wavePercent = `${(restDays / totalDays).toFixed(2) * 100}%`);

    // skip preview-ball
    if (props.bigDay.id !== 0) {
      // TODO: set wavePercent to UI
      console.log(props.bigDay.title, wavePercent);
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

      <div className={bigDayBallStyle['color']}></div>
    </div>
  );
}

export default BigDayBall;
