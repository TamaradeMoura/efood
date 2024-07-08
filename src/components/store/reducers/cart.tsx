import  { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { menu } from '../../../pages/categories'

type CartState = {
  items: menu[]
  isOpen: boolean
  isOpenModal: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOpenModal: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<menu>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)

      if(!prato) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpenModal = false
    }
  }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
