//importing createstore from redux to create an redux store
import  { createStore } from 'redux';
import jwt_decode from 'jwt-decode';

//initalize the initail state
const initialState = {
    products:[],
    cartItems:[],
    orders:[],
    isAuthenticated:false,
    user:{}
}



function saveToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState);
    } catch (error) {
        console.log(error)
    }
}

function loadFromLocalStorage(){
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState == null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

//create a redux store with reducer, initailstate
export const store = createStore(
    reducer,
    // initialState,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

store.subscribe(()=>saveToLocalStorage(store.getState()))

// export default store;

//Reducer function
function reducer(state=initialState, action){
    switch(action.type){
        case 'REGISTER_USER':
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        case 'LOGIN_USER':
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        case 'LOGOUT_USER':
            return{
                ...state,
                isAuthenticated:false,
                user:{
                    role:'',
                    token:''
                }
            }
        case 'GET_INITIAL_PRODUCTS':
            return{
                ...state,
                products:action.payload
            }
        case 'ADD_TO_CART':
            return{
                ...state,
                cartItems:[...state.cartItems,action.payload],
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cartItems: state.cartItems.filter((item) => item._id !== action.payload)
            }
        case 'CLEAR_CART':
            return{
                ...state,
                cartItems:[]
            }
        case 'GET_ORDERS':
            return{
                ...state,
                orders:action.payload
            }
        default:
            return state;
    }
}

// redux Action

export const registerUserAction = (obj) =>({
    type: 'REGISTER_USER',
    payload: obj
})

export const loginUserAction = (obj) =>({
    type: 'LOGIN_USER',
    payload: obj
})

export const logoutUserAction = () =>({
    type: 'LOGOUT_USER',
    payload:{}
})

export const getInitialProducts = (obj) =>({
    type: 'GET_INITIAL_PRODUCTS',
    payload:obj
})

export const addToCartAction = (obj) =>({
    type:'ADD_TO_CART',
    payload: obj
})

export const removeFromCartAction = (id) =>({
    type:'REMOVE_FROM_CART',
    payload:id
})

export const clearCartAction = () =>({
    type:'CLEAR_CART',
    payload:{}
})

export const getOrdersAction = (orders) =>({
    type:'GET_ORDERS',
    payload:orders
})

