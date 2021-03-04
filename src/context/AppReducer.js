import {
  GET_BIGDAYS,
  UPDATE_BIGDAYS,
  POST_BIGDAY,
  DELETE_BIGDAY,
  BIGDAY_ERROR,
} from './bigDay/BigDayTypes';

const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_BIGDAYS:
      return {
        ...state,
        loading: false,
        bigDays: action.payload,
      };

    case UPDATE_BIGDAYS:
      return {
        ...state,
        bigDays: action.payload,
      };

    case POST_BIGDAY:
      return {
        ...state,
        bigDays: [...state.bigDays, action.payload],
      };

    case DELETE_BIGDAY:
      return {
        ...state,
        bigDays: state.bigDays.filter(
          (bigDay) => bigDay._id !== action.payload,
        ),
      };

    case BIGDAY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { AppReducer };
