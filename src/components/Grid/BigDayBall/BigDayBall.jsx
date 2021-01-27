import React from 'react';
import bigDayBallStyle from './BigDayBall.module.scss';

function BigDayBall(props) {
  // differentiate non / highlight-ball-size
  const diffSizeStyle = props.isHighlight
    ? bigDayBallStyle['ball-size--l']
    : bigDayBallStyle['ball-size--s'];

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
