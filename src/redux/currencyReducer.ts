import { createSlice } from '@reduxjs/toolkit'
import { currency } from 'components/Currency/Currency'

type State = {
  currency: string
  exchangeRates: {
    [key: string]: number
  }
}

export const initialState: State = {
  currency: currency[0],
  exchangeRates: {
    USD: 1,
    EUR: 0.92,
    UAH: 36.65,
  },
}

export const currencyReducer = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency: (state, action) => ({
      ...state,
      currency: action.payload,
    }),
  },
})

export const { changeCurrency } = currencyReducer.actions

export default currencyReducer.reducer
