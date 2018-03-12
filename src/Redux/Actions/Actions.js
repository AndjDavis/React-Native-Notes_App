import axios from 'axios';
const URL = 'https://killer-notes.herokuapp.com';

export function setData(notes) {
  return {
    type: 'SET_DATA',
    notes,
  }
}

export function loadData() {
  return dispatch => {
    axios.get(`${URL}/note/get/all`)
      .then((response) => {
        dispatch(setData(response.data))
      })
      .catch(err => {
        console.error(err);
      })
  }
}