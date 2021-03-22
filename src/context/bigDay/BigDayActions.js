import axios from 'axios';
import {
  BIGDAY_LOADING,
  GET_BIGDAYS,
  UPDATE_BIGDAY,
  POST_BIGDAY,
  DELETE_BIGDAY,
  BIGDAY_ERROR,
} from './BigDayTypes';

/* --------------------------- get backend address -------------------------- */

const host = process.env.REACT_APP_API_URL;

/* -------------------------- get bigDays from API -------------------------- */

const getBigDays = async (dispatch) => {
  try {
    dispatch({
      type: BIGDAY_LOADING,
    });

    const res = await axios.get(`${host}/api/v1/bigDays`);

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

const updateBigDay = async (id, newBigDay, dispatch) => {
  // init header-info
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // update data to api
    await axios.patch(`${host}/api/v1/bigDays/${id}`, newBigDay, config);

    // dispatch data
    dispatch({
      type: UPDATE_BIGDAY,
      payload: newBigDay,
    });
  } catch (err) {
    dispatch({
      type: BIGDAY_ERROR,
      payload: err.response.data.error,
    });
  }
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
    const res = await axios.post(`${host}/api/v1/bigDays`, newBigDay, config);

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
    await axios.delete(`${host}/api/v1/bigDays/${id}`);

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

export { getBigDays, updateBigDay, postBigDay, deleteBigDay };
