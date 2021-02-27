import { GET_BIGDAYS, POST_BIGDAY } from './bigDay/BigDayTypes';

const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_BIGDAYS:
      return {
        ...state,
        bigDays: action.payload,
      };

    case POST_BIGDAY:
      return {
        ...state,
        bigDays: [...state.bigDays, action.payload],
      };

    default:
      return state;
  }
};

export { AppReducer };
