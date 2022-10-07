import { INC_NUM, DEC_NUM } from "../constants";

const reducer = (state, action) => {
    switch(action.type){
        case INC_NUM: return state + action.payload;
        case DEC_NUM: if(state > 0) return state - action.payload;
        default: return state;
    }
}

export default reducer