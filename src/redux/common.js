const GET_BREAD = Symbol();
const DONATE_CITYS = Symbol();

const initialState = {
  locationData: 1,
  citys: []

}


export default (state = initialState, action) => {
  switch (action.type) {

    case GET_BREAD:
      return {
        ...state,
        BreadData: action.data
      }
    case DONATE_CITYS:
      return {
        ...state,
        citys: action.data
      }
    default:
      return state
  }
}

export const dispatch_common_func = {

  getBread: (data) => {
    return dispatch => {
      dispatch({
        type: GET_BREAD,
        data: data
      });
    }
  },


}

