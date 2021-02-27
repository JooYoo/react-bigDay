import axios from 'axios';
import { GET_BIGDAYS, POST_BIGDAY, BIGDAY_ERROR } from './BigDayTypes';

/* -------------------------- get bigDays from API -------------------------- */

const getBigDays = async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/bigDays');

    dispatch({
      type: GET_BIGDAYS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: BIGDAY_ERROR,
      payload: err.response.data.error,
    });
  }
};

/* ----------------------------- add new bigDay ----------------------------- */

const postBigDay = (newBigDay, dispatch) => {
  dispatch({
    type: POST_BIGDAY,
    payload: newBigDay,
  });
};

export { getBigDays, postBigDay };
