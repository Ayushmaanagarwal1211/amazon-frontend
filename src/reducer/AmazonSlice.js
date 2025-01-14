import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    initialState:{
        sidebar : false,
        modal : false
    },
    name : "Posts",
    reducers : {
        toggleSidebar : (state)=>{
            if(state.sidebar){
                state.sidebar = false
            }else{
                state.sidebar = true
            }
        },
        togglePopup : (state,action)=>{
            console.log(action)
            if(state.modal){
                state.modal = action.payload
            }else{
                state.modal = action.payload
            }
        }
    }
})
export function selectSidebar(state){
    return state.header.sidebar
}
export function selectModal(state){
    return state.header.modal
}
export const {toggleSidebar,togglePopup} = slice.actions
export default slice.reducer