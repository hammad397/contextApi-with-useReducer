import { INC_NUM, DEC_NUM } from "../constants";

export const increment = num => {
    return{
        type: INC_NUM,
        payload: num
    }
}

export const decrement = num => {
    return{
        type: DEC_NUM,
        payload: num
    }
}