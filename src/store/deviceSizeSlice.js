import { createSlice } from '@reduxjs/toolkit';

const deviceSizeSlice = createSlice({
  name: 'deviceSize',
  initialState: {
    width: undefined,
  },
  reducers: {
    resizeWidth(state, action) {
      state.width = action.payload;
    },
  },
});

export const { resizeWidth } = deviceSizeSlice.actions;

export default deviceSizeSlice.reducer;
