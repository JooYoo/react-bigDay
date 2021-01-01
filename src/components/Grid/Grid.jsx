import React from 'react';
import BigDayBallList from './BigDayBallList/BigDayBallList';
import gridStyle from './Grid.module.scss';

function Grid() {
  return (
    <div className={gridStyle['grid-container']}>
      <BigDayBallList />
    </div>
  );
}

export default Grid;
