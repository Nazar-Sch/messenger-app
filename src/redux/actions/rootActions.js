import api from '../../api/api'

import { SEND_MESSAGE, SELECT_ID, GET_JOKE, GET_JOKE_FAIL } from '../constants/types';

export const selectedId = id => dispatch => {
      dispatch({
            type: SELECT_ID,
            payload: id,
      })
};
      
export const sendMessageAction = (text, id) => dispatch => {
      dispatch({
        type: SEND_MESSAGE,
        id,
        payload:                            
            {
                  message: text,
                  date: new Date().toISOString(),
                  sent: true,
            },
      })
};

export const getJoke = id => dispatch => {
  api.getRandomJoke()
      .then(res => {
            dispatch({
                  type: GET_JOKE,
                  id,
                  payload:                            
                  {
                        message: res.data.value,
                        date: new Date().toISOString(),
                        sent: false,
                  },
            })
      })
      .catch(err => {
            console.log('Error!');
            dispatch({
                  type: GET_JOKE_FAIL,
                  payload: err,
            });
      });
};
     

