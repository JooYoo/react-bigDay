import React, { useContext, useEffect } from 'react';
import * as moment from 'moment';
import { BigDayContext } from '../../../context/GlobalState';
import BigDayItemStyle from './BigDayItem.module.scss';
import { useAuth0 } from '@auth0/auth0-react';

function BigDayItem({ bigDay }) {
  // get data from context
  const { bigDays, getBigDays, updateBigDay, deleteBigDay } = useContext(
    BigDayContext,
  );

  useEffect(() => {
    getBigDays();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                            check Authentication                            */
  /* -------------------------------------------------------------------------- */
  // setup auth info
  const { user, isAuthenticated } = useAuth0();
  // get valide usermail
  const validateUserMail = process.env.REACT_APP_WHO_ARE_U;

  // check is auth ok
  const isAuthOk = () => {
    // check if login validate
    let isLoginOk = isAuthenticated ? isAuthenticated : false;
    // check if user validate
    let isUserOk;
    if (user) {
      isUserOk = user.email === validateUserMail ? true : false;
    }

    return isLoginOk && isUserOk;
  };

  /* -------------------------------------------------------------------------- */
  /*                click highlight point to toggle highlight day               */
  /* -------------------------------------------------------------------------- */
  const toggleIsHiglight = (thisBigDay) => {
    // check clickable via Auth
    if (!isAuthOk()) {
      return;
    }

    // check if clicked the same item again
    if (thisBigDay.isHighlight) {
      return;
    }

    // clone bigDays
    let cloneBigDays = [...bigDays];

    /* ------------------------- update prevBigDay ------------------------- */
    // find prevBigDay
    const prevBigDay = cloneBigDays.find((x) => x.isHighlight === true);
    // prevBigDay => false
    const newPrevBigDay = {
      ...prevBigDay,
      isHighlight: !prevBigDay.isHighlight,
    };

    // update data to db
    updateBigDay(prevBigDay._id, newPrevBigDay);

    /* ---------------------------- update thisBigDay --------------------------- */
    // thisBigDay => true
    const newThisBigDay = {
      ...thisBigDay,
      isHighlight: !thisBigDay.isHighlight,
    };
    // update data to db
    updateBigDay(thisBigDay._id, newThisBigDay);
  };

  /* -------------------------------------------------------------------------- */
  /*                    delete bigDay: check auth then delete                   */
  /* -------------------------------------------------------------------------- */
  const deleteBigDayHandler = (id) => {
    // check clickable via Auth
    if (!isAuthOk()) {
      return;
    }

    // check if current bigDay is highlight
    const currentBigDay = bigDays.find((item) => item._id === id);
    if (currentBigDay.isHighlight) {
      return;
    }

    // delete bigDay
    deleteBigDay(id);
  };

  /* -------------------------------------------------------------------------- */
  /*                                calc restDays                               */
  /* -------------------------------------------------------------------------- */
  const endDate = moment(bigDay.end);
  const currentDate = moment();
  const restDays = moment(endDate.diff(currentDate, 'days'))._i;

  /* -------------------------------------------------------------------------- */
  /*                               dynamic styles                               */
  /* -------------------------------------------------------------------------- */
  // set item highlight color
  let highlightTureStyle = {
    backgroundColor: `${bigDay.themeColor}`,
    boxShadow: '0 0 1vw 0.2vw white, 0 0 1vw 0.3vw rgba(255,255,255,0.1)',
  };
  let highlightFalseStyle = {
    backgroundColor: `${bigDay.themeColor}`,
    boxShadow: 'unset',
  };

  return (
    <div className={BigDayItemStyle['wrapper']}>
      <div className={BigDayItemStyle['list-item__title-container']}>
        <button
          className={BigDayItemStyle['list-item__title-theme-color']}
          style={bigDay.isHighlight ? highlightTureStyle : highlightFalseStyle}
          onClick={() => toggleIsHiglight(bigDay)}
        ></button>
        <div className={BigDayItemStyle['list-item__title']}>
          {bigDay.title}
        </div>
      </div>
      <div className={BigDayItemStyle['list-item__date-main-wrapper']}>
        <div className={BigDayItemStyle['list-item__date-wrapper']}>
          <div className={BigDayItemStyle['list-item__date--start']}>
            {bigDay.begin}
          </div>
          <div className={BigDayItemStyle['list-item__date--end']}>
            {bigDay.end}
          </div>
        </div>
        <div className={BigDayItemStyle['list-item__date--rest-days']}>
          {restDays} / {bigDay.totalDays}
        </div>
      </div>
      <button
        className={BigDayItemStyle['list-item__btn']}
        onClick={() => deleteBigDayHandler(bigDay._id)}
      >
        remove
      </button>
    </div>
  );
}

export default BigDayItem;
