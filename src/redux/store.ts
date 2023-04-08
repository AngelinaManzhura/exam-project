import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './currencyReducer'
import productsCart from './productsCart'

export const store = configureStore({
  reducer: {
    currencyReducer,
    productsCart,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
