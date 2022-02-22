import { createSlice } from '@reduxjs/toolkit';

const summarySlice = createSlice({
  name: 'summaries',
  initialState: {
    currentPage: 1,
    totalPages: 0,
    totalSummaries: 0,
    summaries: [],
    photo: false,
  },
  reducers: {
    getTotalSummaries(state, action) {
      state.currentPage = action.payload;
    },
    getCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    pageDecrement(state, action) {
      if (state.currentPage === action.payload) {
        return state.currentPage;
      }
      state.currentPage = state.currentPage - 1;
    },
    pageIncrement(state, action) {
      if (state.currentPage === action.payload) {
        return state.currentPage;
      }
      state.currentPage = state.currentPage + 1;
    },
    updateTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    addSummaries(state, action) {
      state.summaries = [...action.payload];
    },
    togglePhoto(state, action) {
      state.photo = action.payload;
    },
  },
});

export const {
  getCurrentPage,
  pageDecrement,
  pageIncrement,
  getTotalSummaries,
  updateTotalPages,
  addSummaries,
  togglePhoto,
} = summarySlice.actions;

export default summarySlice.reducer;
