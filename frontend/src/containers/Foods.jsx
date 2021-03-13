import React, { Fragment, useEffect, useReducer } from 'react';
// reducers
import {
  initialState as foodsInitialState,
  foodsActionTypes,
  foodsReducer,
} from '../reducers/foods';
// apis
import { fetchFoods } from '../apis/foods';
// constants
import { REQUEST_STATE } from '../constants';

export const Foods = ({
  match
}) => {
  const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState);
  //useEffectで一度だけAPIを叩き、その返り値をreducerを通してstateにセット
  useEffect(() => {
    dispatch({ type: foodsActionTypes.FETCHING });
    fetchFoods(match.params.restaurantsId)
      .then((data) => {
        dispatch({
          type: foodsActionTypes.FETCH_SUCCESS,
          payload: {
            foods: data.foods
          }
        });
      })
  }, [])

  return (
    <Fragment>
      {
        foodsState.fetchState === REQUEST_STATE.LOADING ?
          <Fragment>
            <p>
              {/* 一旦ロード中は「ロード中...」という文言を表示し、取得が完了したらそのデータをそのまま出力 */}
              ロード中...
            </p>
          </Fragment>
          :
          foodsState.foodsList.map(food =>
            <div key={food.id}>
              {food.name}
            </div>
          )
      }
    </Fragment>
  )
}
