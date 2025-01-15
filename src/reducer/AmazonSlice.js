import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    initialState:{
        sidebar : false,
        modal : false,
        cart : []
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
        },
        addToCart : (state,action)=>{
            const {id,name,image,price,originalPrice,discount,color,size,pattern,deliveryEstimate,seller,ratings,reviews,inStock,isGift} = action.payload
            const product = {
                id,name,image,price,originalPrice,discount,color,size,pattern,deliveryEstimate,seller,ratings,reviews,inStock,isGift,count : 1
            }
            state.cart.push(product)
        },
        removeFromCart : (state,action)=>{
            state.cart = state.cart.filter(data=>data.id!==action.payload)
        },
        increaseCountOfACartProduct: (state,action)=>{
            state.cart = state.cart.map((product)=>{
                if(product.id == action.payload){
                    return {...product, count:product.count+1}
                }
                return product
            })
            console.log(state.cart,action.payload)
        },
        
        decreaseCountOfACartProduct: (state,action)=>{
            state.cart = state.cart.map((product)=>{
                if(product.id == action.payload){
                    return {...product, count: product.count-1 }
                }
                return product
            })
        }
    }
})

export function selectSidebar(state){
    return state.header.sidebar
}
export function selectModal(state){
    return state.header.modal
}
export function selectCart(state){
    return state.header.cart
}
export const {toggleSidebar,togglePopup,addToCart,removeFromCart,decreaseCountOfACartProduct,increaseCountOfACartProduct} = slice.actions
export default slice.reducer