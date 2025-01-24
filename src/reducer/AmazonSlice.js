import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    initialState:{
        sidebar : false,
        modal : false,
        cart : [],
        loading : false,
        currUser : {
            user : null,
        }
    },
    name : "Amazon",
    reducers : {
        toggleSidebar : (state)=>{
            state.sidebar = !state.sidebar
        },
        toggleLoading : (state,action)=>{
            state.loading = action.payload
        },
        togglePopup : (state,action)=>{
            state.modal = action.payload
        },
        setCartData: (state,action)=>{
            state.cart = action.payload
        },
        setUser: (state,action)=>{
            const {user,token} = action.payload
            state.currUser.user = user
        },
        removeUser : (state,action)=>{
            state.currUser.user = null;
        }
        // increaseCountOfACartProduct: (state,action)=>{
        //     state.cart = state.cart.map((product)=>{
        //         if(product.id == action.payload){
        //             return {...product, count:product.count+1}
        //         }
        //         return product
        //     })
        // },
        // changeSelection : (state,action)=>{
        //     state.cart = state.cart.map((product)=>{
        //         if(product.id == action.payload){
        //             return {...product, isSelected : !product.isSelected}
        //         }
        //         return product
        //     })
        // },
        // decreaseCountOfACartProduct: (state,action)=>{
        //     state.cart = state.cart.map((product)=>{
        //         if(product.id == action.payload){
        //             return {...product, count: product.count-1 }
        //         }
        //         return product
        //     })
        // },
       
    }
})

export function selectSidebar(state){
    return state.header.sidebar
}
export function selectLoading(state){
    return state.header.loading
}
export function selectModal(state){
    return state.header.modal
}
export function selectUser(state){
    return state.header.currUser.user
}
export function selectCart(state){
    return state.header.cart
}


export const {
    toggleSidebar,
    setCartData,
    setUser,
    togglePopup,
    toggleLoading,
    removeUser
            // changeSelection,
            // decreaseCountOfACartProduct,
            // increaseCountOfACartProduct, 
    } = slice.actions
export default slice.reducer