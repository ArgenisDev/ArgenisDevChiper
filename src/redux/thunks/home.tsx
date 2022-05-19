import {ActionCreator} from 'redux';
import {useHTTP} from '../../hooks';
import {responseData} from '../actions/responseData';
import {GET_R_PICS_DATA} from '../actionTypes';

export function asyncGetRPics() {
  return async (dispatch: ActionCreator<any>) => {
    useHTTP({
      method: 'GET',
      endpoint: 'r/pics/hot.json',
    }).then(async responseHandler => {
      const response = responseHandler?.length && responseHandler[1];
      if (response.data) {
        dispatch(
          responseData(
            GET_R_PICS_DATA,
            response?.success,
            response?.message,
            response?.data,
          ),
        );
      }
    });
  };
}
