import {
  GET_BIGDAYS,
  UPDATE_BIGDAYS,
  POST_BIGDAY,
  DELETE_BIGDAY,
} from './bigDay/BigDayTypes';

const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_BIGDAYS:
      return {
        ...state,
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
        bigDays: state.bigDays.filter((x) => x.id !== action.payload),
      };

    default:
      return state;
  }
};

export { AppReducer };
