import { createSlice } from '@reduxjs/toolkit'
import { Product } from 'utils/productsArray'

type State = {
  [id: number]: Product & {
    qty: number
  }
}

const initialState: State = {}

export const productsCart = createSlice({
  name: 'productsCart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => ({
      ...state,
      [action.payload.id]: {
        ...action.payload,
        qty: state[action.payload.id] ? state[action.payload.id].qty + 1 : 1,
      },
    }),
  },
})

export const { addProductToCart } = productsCart.actions

export default productsCart.reducer
