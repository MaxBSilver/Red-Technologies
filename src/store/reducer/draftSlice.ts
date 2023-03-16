import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DraftState {
  customerName: string;
  orderType: string;
}

const initialState = {
  customerName: "",
  orderType: "",
} as DraftState;

const userSlice = createSlice({
  name: "draft",
  initialState,
  reducers: {
    saveDraft(state, action: PayloadAction<DraftState>) {
      state.customerName = action.payload.customerName;
      state.orderType = action.payload.orderType;
    },
    clearDraft(state) {
      state.customerName = "";
      state.orderType = "";
    },
  },
});

export const { saveDraft, clearDraft } = userSlice.actions;
export default userSlice.reducer;
