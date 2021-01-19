import React from 'react';
import BigDayInfo from '../BigDayInfo/BigDayInfo';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall(props) {
  // differentiate non / highlight-ball-size
  const diffSizeStyle = props.bigDay.isHighlight
    ? bigDayBallStyle['ball-size--l']
    : bigDayBallStyle['ball-size--s'];

  return (
    <div className={`${bigDayBallStyle['wrapper']} ${diffSizeStyle}`}>
      <div className={bigDayBallStyle['container']}>
        <div className={bigDayBallStyle['wave']}></div>
        <BigDayInfo />
      </div>
      <div className={bigDayBallStyle['color']}></div>

      {/* DEV: transfer to the color of Ball */}
      {/* <div>{props.bigDay.themeColor}</div> */}
    </div>
  );
}

export default BigDayBall;
