import { configureStore } from '@reduxjs/toolkit';

import productReducer from './product.slices';
import ticketReducer from './ticket.slice';

const store = configureStore({
  reducer: {
    product: productReducer,
    ticket: ticketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
