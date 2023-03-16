import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  name: string
}

const initialState = { name: 'Dave' } as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.name = action.payload
    }
  },
})

export const { login } = userSlice.actions
export default userSlice.reducer