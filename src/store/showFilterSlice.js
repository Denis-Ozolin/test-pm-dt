import { createSlice } from '@reduxjs/toolkit';

const showFilterSlice = createSlice({
  name: 'showFilter',
  initialState: {
    filter: false,
  },
  reducers: {
    isShowingFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { isShowingFilter } = showFilterSlice.actions;

export default showFilterSlice.reducer;
