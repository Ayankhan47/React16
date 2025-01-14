export {add} from '../reducer/productSlice.jsx'
import {remove} from '../reducer/productSlice.jsx'

export const asyncremove = (index) => async (dispatch, getstate) =>{
    const state = getstate()    
   try {
    setTimeout(() => {
        dispatch(remove(index))
    }, 2000);
   } catch (error) {
    console.log("error");
    
   }
}