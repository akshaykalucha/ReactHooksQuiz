import * as actionTypes from './actions';

const initialState = {
    sayHi: "false",
    myPrice: 33,
    quizDic: null,
    Genre: "GK",
    level: 'Easy',
}

const reducer = (state=initialState, action ) => {
    switch(action.type) {
        case actionTypes.SHOW_ALERT:
            return {
                ...state,
                sayHi: "true",
                myPrice: state.myPrice +  action.params[0]
            }
        case actionTypes.CREATE_QUIZ:
            return{
                ...state,
                level: action.param
            }
        default:
            return state
    }

}

export default reducer