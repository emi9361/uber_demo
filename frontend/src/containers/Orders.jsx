import React, { Fragment, useEffect, useReducer } from 'react';
import { fetchLineFoods } from '../apis/line_foods';

//reducers
import {
  initialState,
  lineFoodReducer,
  lineFoodsActionTypes,
  lineFoodsReducers,
} from '../reducers/lineFoods';

export const Orders = () => {
  const [state, dispatch] = useReducer(lineFoodReducer, initialState);

  useEffect(() => {
    dispatch({ type: lineFoodsActionTypes.FETCHING });
    fetchLineFoods()
      .then((data) =>
        dispatch({
          type: lineFoodsActionTypes.FETCH_SUCCESS,
          payload: {
            lineFoodsSummary: data
          }
        })
      )
      .catch((e) => console.error(e));
  }, []);

  return (
    <Fragment>
      注文画面
    </Fragment>
  )
}
