import React from 'react';
import BigDayList from './BigDayList/BigDayList';
import slideUpStyle from './SlideUp.module.scss';

function SlideUp() {
  return (
    <div className={slideUpStyle['slide-up-container']}>
      <BigDayList />
    </div>
  );
}

export default SlideUp;
