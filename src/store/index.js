import { configureStore } from '@reduxjs/toolkit';
import summaryReducer from './summarySlice';
import deviceSizeReducer from './deviceSizeSlice';

export default configureStore({
  reducer: {
    summaries: summaryReducer,
    deviceSize: deviceSizeReducer,
  },
});
