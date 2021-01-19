import React, { useState } from 'react';
import BigDayList from './BigDayList/BigDayList';
import slideUpStyle from './SlideUp.module.scss';

function SlideUp() {
  const [isSlideUp, setIsSlideUp] = useState(false);

  /* --------------------------- slide-up animation --------------------------- */
  const onSlideUp = () => {
    setIsSlideUp(!isSlideUp);
    console.log('clicked');
  };

  /* ------------------------- slide-up darkner style ------------------------- */
  const darknerBlur = {
    opacity: '1',
  };

  const darknerClear = {
    opacity: '0',
  };

  return (
    <div className={slideUpStyle['slideup-modal-host']}>
      <div
        className={slideUpStyle['slideup__darkner']}
        style={isSlideUp ? darknerBlur : darknerClear}
        onClick={onSlideUp}
      ></div>
      <div
        id="slideup__container"
        className={
          slideUpStyle['slideup__container'] +
          ' ' +
          (isSlideUp
            ? slideUpStyle['slide-up-anim']
            : slideUpStyle['slide-down-anim'])
        }
      >
        <button
          id="slideup__btn"
          className={slideUpStyle['slideup__btn']}
          onClick={onSlideUp}
        ></button>
        <div className={slideUpStyle['slideup__scroll-panel']}>
          <BigDayList />
        </div>
      </div>
    </div>
  );
}

export default SlideUp;
