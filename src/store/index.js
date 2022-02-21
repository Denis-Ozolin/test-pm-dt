import { configureStore } from '@reduxjs/toolkit';
import summaryReducer from './summarySlice';
import deviceSizeReducer from './deviceSizeSlice';
import showFilterReducer from './showFilterSlice';

export default configureStore({
  reducer: {
    summaries: summaryReducer,
    deviceSize: deviceSizeReducer,
    showFilter: showFilterReducer,
  },
});
