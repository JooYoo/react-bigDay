import axios from 'axios';
import {
  GET_BIGDAYS,
  UPDATE_BIGDAYS,
  POST_BIGDAY,
  DELETE_BIGDAY,
  BIGDAY_ERROR,
} from './BigDayTypes';

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

/* ----------------------------- update bigDays ----------------------------- */

const updateBigDays = (newBigDays, dispatch) => {
  dispatch({
    type: UPDATE_BIGDAYS,
    payload: newBigDays,
  });
};

/* ----------------------------- add new bigDay ----------------------------- */

const postBigDay = (newBigDay, dispatch) => {
  dispatch({
    type: POST_BIGDAY,
    payload: newBigDay,
  });
};

/* ------------------------------ delete bigDay ----------------------------- */

const deleteBigDay = (id, dispatch) => {
  dispatch({
    type: DELETE_BIGDAY,
    payload: id,
  });
};

export { getBigDays, updateBigDays, postBigDay, deleteBigDay };
