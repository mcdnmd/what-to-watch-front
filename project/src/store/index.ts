import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { api } from '../service/api';
import { redirect } from '../middlewares/redirect';


export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
