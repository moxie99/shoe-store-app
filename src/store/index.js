import { configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "./cartSlice"
import { productsSlice } from "./ProductsSlice"

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
})
