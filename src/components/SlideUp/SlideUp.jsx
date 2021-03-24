import React, { useState } from 'react';
import BigDayList from './BigDayList/BigDayList';
import slideUpStyle from './SlideUp.module.scss';

function SlideUp() {
  const [isSlideUp, setIsSlideUp] = useState(false);

  /* --------------------------- slide-up animation --------------------------- */
  const onSlideUp = () => {
    setIsSlideUp(!isSlideUp);
  };

  /* ------------------------- slide-up darkner style ------------------------- */
  const darknerBlur = {
    opacity: '1',
    pointerEvents: 'auto',
  };

  const darknerClear = {
    opacity: '0',
    pointerEvents: 'none',
  };

  return (
    <>
      <div
        className={slideUpStyle['slideup__darkner']}
        style={isSlideUp ? darknerBlur : darknerClear}
        onClick={onSlideUp}
      ></div>
      <div
        className={
          slideUpStyle['slideup__container'] +
          ' ' +
          (isSlideUp
            ? slideUpStyle['slide-up-anim']
            : slideUpStyle['slide-down-anim'])
        }
      >
        <button
          className={slideUpStyle['slideup__btn']}
          onClick={onSlideUp}
        ></button>
        <div className={slideUpStyle['slideup__scroll-panel']}>
          <BigDayList />
        </div>
      </div>
    </>
  );
}

export default SlideUp;
