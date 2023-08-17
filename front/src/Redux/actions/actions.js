import { ADD_FAV, REMOVE_FAV } from "./action-types";
export const addFav = (payload) =>{
    return{
        type: ADD_FAV,
        payload: payload
    } 
}
export const removeFav = (id)=> ({
type: REMOVE_FAV,
payload: id
})