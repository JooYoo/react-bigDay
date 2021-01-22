import React from 'react';
import BigDayBallList from './BigDayBallList/BigDayBallList';
import gridStyle from './Grid.module.scss';
import GridBg from './GridBg/GridBg';

function Grid() {
  return (
    <div className={gridStyle['grid-container']}>
      <GridBg />
      <BigDayBallList />
    </div>
  );
}

export default Grid;
