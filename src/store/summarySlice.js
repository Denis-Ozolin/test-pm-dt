import { createSlice } from '@reduxjs/toolkit';

const summarySlice = createSlice({
  name: 'summaries',
  initialState: {
    summaries: [],
    photo: false,
  },
  reducers: {
    addSummaries(state, action) {
      state.summaries = [...state.summaries, ...action.payload];
    },
    togglePhoto(state, action) {
      state.photo = action.payload;
    },
    // getPhotoOn(state, action){
    //   state.summaries = state.summaries.filter(summary => summary.photo !== null);
    // }
  },
});

export const { addSummaries, togglePhoto } = summarySlice.actions;

export default summarySlice.reducer;
