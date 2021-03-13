import { REQUEST_STATE } from '../constants';

//APIの状態を表すfetchStateと、取得したフード一覧が格納されるfoodsList
export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  foodsList: [],
};

//取得中を表すFETCHINGと、取得成功した状態のFETCH_SUCCESS
export const foodsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

//foodsReducerはfoodsActionTypesによってstateを２種類返すようになってる
export const foodsReducer = (state, action) => {
  switch (action.type) {
    case foodsActionTypes.FETCHING:
      return {
        //...state(スプレッド構文)は配列やオブジェクトなどを展開するために使う
        ...state,
        //ローディング中
        fetchState: REQUEST_STATE.LOADING,
      };
    case foodsActionTypes.FETCH_SUCCESS:
      return {
        //成功
        fetchState: REQUEST_STATE.OK,
        foodsList: action.payload.foods,
      };
    default:
      throw new Error();
  }
}
