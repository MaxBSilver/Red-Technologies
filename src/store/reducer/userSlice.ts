import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  user: string
}

const initialState = { user: 'Dave' } as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.user = action.payload
    }
  },
})

export const { login } = userSlice.actions
export default userSlice.reducer