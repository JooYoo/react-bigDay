import { GET_BIGDAYS } from './bigDay/BigDayTypes';

const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_BIGDAYS:
      return {
        ...state,
        bigDays: action.payload,
      };

    default:
      return state;
  }
};

export { AppReducer };
