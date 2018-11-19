import * as constants from './constants';

const initialState = {
  results: [],
  userNm: null,
  totalCt: 0,
  pageNumber: 1,
  details: null,
}

const allState = (state=initialState, action) => {
    switch (action.type) {
      case constants.SET_RESULTS: {
        return {
            ...state,
            results: action.res,
            userNm: action.userNm,
            totalCt: action.totalCt,
            pageNumber: action.newPage,
            details: null,
        }
      }
      case constants.SET_DETAIL: {
        const { resp } = action;
        return {
          ...state,
          details: {
            bio: resp.bio,
            name: resp.name,
            location: resp.location,
            followers: resp.followers,
            following: resp.following,

          }
        }
      }
      case constants.CLEAR_DETAIL: {
        return {
          ...state,
          details: null,
        }
      }
      default:
      return state
    }
}

export default allState