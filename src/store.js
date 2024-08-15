import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlices';
import searchReducer from './slices/searchSlices';

const store = configureStore({
  reducer: {
    movies : moviesReducer,
    search : searchReducer
  },
});

export default store;
