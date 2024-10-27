import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
});

//Definisemo provider funkciju koju cemo koristiti da je obmoramo oko
//komponenti koje ce da smeti da pristupe kontekstu
//on ce stvarno upravljati podacima, gore kreiran kontekst je samo shape
//Na kraju hocemo da vratimo CartContext.Provider 

function reducer(state, action){
    if(action.type === "ADD_ITEM"){
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const updatedItems = [...state.items];

        if(existingItemIndex > -1){
            const updatedItem = {
                ...state.items[existingItemIndex],
                quantity: state.items[existingItemIndex].quantity + 1,
            }
            updatedItems[existingItemIndex] = updatedItem;
        }
        else{
            updatedItems.push({
                ...action.item,
                quantity : 1,
            });
        }

        return { ...state, items: updatedItems};
    }
    
    if(action.type === "REMOVE_ITEM"){
        const existItemIndex = state.items.findIndex(item => item.id === action.id);
        let updateArr = [...state.items];
        

        if(state.items[existItemIndex].quantity > 1 ){
            const updateItem = {
                ...state.items[existItemIndex],
                quantity : updateArr[existItemIndex].quantity - 1,
            }
            updateArr[existItemIndex] = updateItem;
        }
        else if(state.items[existItemIndex].quantity === 1){
           updateArr = updateArr.filter(item => item.id !== action.id);
        }
        
        return { ...state, items: updateArr }
    }

    //Vratimo samo stanje koje je bilo ako nije odabrana nijedna akcija
    return state; 
}


export function CartContextProvider({ children }){
    //InitialState je vezan za state u reducer funk
    const [cart, dispatch] = useReducer(reducer, { items: [] });

    const addItem = (item) => {
        dispatch({type: "ADD_ITEM", item: item})
    };

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", id: id})
    };

    return (
        <CartContext.Provider value={{items : cart.items, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;