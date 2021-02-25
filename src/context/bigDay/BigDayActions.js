import axios from 'axios';
import { GET_BIGDAYS, BIGDAY_ERROR } from './BigDayTypes';

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

export { getBigDays };
