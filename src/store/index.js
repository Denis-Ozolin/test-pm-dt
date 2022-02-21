import { configureStore } from '@reduxjs/toolkit';
import summaryReducer from './summarySlice';

export default configureStore({
  reducer: {
    summaries: summaryReducer,
    // pages: pageReducer
  },
});
