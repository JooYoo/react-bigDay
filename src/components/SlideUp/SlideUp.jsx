import React from 'react';
import BigDayForm from './BigDayForm/BigDayForm';
import BigDayList from './BigDayList/BigDayList';
import slideUpStyle from './SlideUp.module.scss';

function SlideUp() {
  return (
    <div className={slideUpStyle['slide-up-container']}>
      <BigDayForm />
      <hr />
      <BigDayList />
    </div>
  );
}

export default SlideUp;
