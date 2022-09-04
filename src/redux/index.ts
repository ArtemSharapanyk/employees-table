import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { usersApi } from "./asyncActions/users";
import activeUsers from "./slices/activeUsers";

const rootReducer = combineReducers({
  activeUsersList: activeUsers,
});

const setupStore = () =>
  configureStore({
    reducer: {
      rootReducer,
      [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getMiddleware) =>
      getMiddleware({
        serializableCheck: false,
      }).concat(usersApi.middleware),
  });

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatch = AppStoreType["dispatch"];

export default setupStore;
