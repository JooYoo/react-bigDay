import React from 'react';
import BigDayBall from './BigDayBall/BigDayBall';
import gridStyle from './Grid.module.scss';

function Grid() {
  return (
    <div className={gridStyle['grid-container']}>
      <BigDayBall />
    </div>
  );
}

export default Grid;
