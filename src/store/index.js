import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import productReducer from './product.slices';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
