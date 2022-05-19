import {GET_R_PICS_DATA} from '../actionTypes';

const responseDataInit = {
  success: false,
  message: '',
  data: [],
};
const initialState = {
  rpics: responseDataInit,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_R_PICS_DATA: {
      return {
        ...state,
        rpics: {
          success: action.success,
          message: action.message,
          data: action.data,
        },
      };
    }

    default:
      return state;
  }
};
