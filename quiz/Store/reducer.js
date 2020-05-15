import * as actionTypes from './actions';

const initialState = {
    sayHi: "false",
    myPrice: 33
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SHOW_ALERT:
            return {
                ...state,
                sayHi: "true",
                myPrice: action.param
            }
        default:
            return state
    }

}

export default reducer