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

const postBigDay = async (newBigDay, dispatch) => {
  // init header-info
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // add data to api
    const res = await axios.post('/api/v1/bigDays', newBigDay, config);

    // dispatch data
    dispatch({
      type: POST_BIGDAY,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: BIGDAY_ERROR,
      payload: err.response.data.error,
    });
  }
};

/* ------------------------------ delete bigDay ----------------------------- */

const deleteBigDay = async (id, dispatch) => {
  try {
    // delete data from API
    await axios.delete(`/api/v1/bigDays/${id}`);

    // dispatch data
    dispatch({
      type: DELETE_BIGDAY,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: BIGDAY_ERROR,
      payload: err.response.data.error,
    });
  }
};

export { getBigDays, updateBigDays, postBigDay, deleteBigDay };
