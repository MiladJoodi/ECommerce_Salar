"use client"
import { createContext, useContext, useState } from "react";

interface ShoppingCartProvider {
    children: React.ReactNode;
}

interface CartItem{
    id: number,
    qty: number
}

interface ShoppingCartContext{
    cartItems: CartItem[]
}

// export const ShoppingCartContext = createContext<ShoppingCartContext>({
//     cartItems: []
// })
export const ShoppingCartContext = createContext({} as ShoppingCartContext)

// custom hook
export const useShoppingCartContext = ()=>{
    return useContext(ShoppingCartContext);
}


export function ShoppingCartProvider({ children }: ShoppingCartProvider) {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    return (
        <ShoppingCartContext.Provider value={{cartItems}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}