import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL, //取得状況
  postState: REQUEST_STATE.INITIAL, //登録状況
  lineFoodSummary: null, //仮注文データ
};

export const lineFoodsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  POSTING: 'POSTING',
  POSTING_SUCCESS: 'POSTING_SUCCESS',
}

export const lineFoodReducer = (state, action) => {
  switch (action.type) {
    case lineFoodsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case lineFoodsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        lineFoodSummary: action.payload.lineFoodSummary,
      };
    case lineFoodsActionTypes.POSTING:
      return {
        ...state,
        postState: REQUEST_STATE.LOADING,
      };
    case lineFoodsActionTypes.POSTING_SUCCESS:
      return {
        postState: REQUEST_STATE.OK,
        lineFoodSummary: action.payload.lineFoodSummary,
      };
    default:
      throw new Error();
  }
}
