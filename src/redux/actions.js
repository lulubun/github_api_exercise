
import * as constants from './constants';

const API_URL_BASE = 'https://api.github.com/search/users?page='

export const setResult = (userNm, res, totalCt, newPage) => {
    return ({
        type: constants.SET_RESULTS,
        userNm,
        res,
        totalCt,
        newPage,
    })
}

export const setDetail = (resp) => {
  return ({
    type: constants.SET_DETAIL,
    resp,
  })
}

export const clearDetail = () => {
  return ({
    type: constants.CLEAR_DETAIL,
  })
}

export const startSearch = (searchTerm, page) => {
  return dispatch => {
    const encodedTerm = encodeURIComponent(searchTerm);
    const fetchUrl = `${API_URL_BASE}${page}&&q=${encodedTerm}`;
    fetch(fetchUrl, {
      method: "GET",
  })
  .then((r) => r.json())
  .then(resp => {
      if (resp.errors) {
        alert(resp.message)
      } else {
        dispatch(setResult(searchTerm, resp.items, resp.total_count, page))
      }
  })
  .catch((e) => console.log(e))
  }
}

export const callDetail = (url) => {
  return dispatch => {
    fetch(url, {
      method: "GET",
    })
    .then((r) => r.json())
    .then(resp => {
        if (resp.errors) {
          alert(resp.message)
        } else {
          dispatch(setDetail(resp))
        }
    })
    .catch((e) => console.log(e))
  }
}
