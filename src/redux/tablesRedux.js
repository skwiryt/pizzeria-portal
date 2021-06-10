import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const REQUEST_START = createActionName('REQUEST_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const REQUEST_ERROR = createActionName('REQUEST_ERROR');
const SEND_SUCCESS = createActionName('SEND_SUCCESS');

/* action creators */
export const requestStarted = payload => ({ payload, type: REQUEST_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const requestError = payload => ({ payload, type: REQUEST_ERROR });
export const sendSuccess = payload => ({ payload, type: SEND_SUCCESS });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(requestStarted());

    Axios
      .get(`${api.url}/api/${api.tables}`)      
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(requestError(err.message || true));
      });
  };
};
export const sendStatusToAPI = (payload) => {
  return (dispatch, getState) => {
    dispatch(requestStarted());
    Axios
      .patch(`${api.url}/api/${api.tables}/${payload.id}`, {status: payload.status})
      .then((res) => { 
        dispatch(sendSuccess(res.data));
      })
      .catch((err) => { 
        dispatch(requestError(err.message || true));
      });
    
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case REQUEST_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case SEND_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map(table => table.id === action.payload.id ? {...table, ...action.payload} : table),
      };
    }
    case REQUEST_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
