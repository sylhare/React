import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { counterReducer } from './counter/slice';



// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  counter: counterReducer,
})

// Using EnhancedStore type does not work, so we need to put any then use the `AppStore` type later
export const setupStore = (preloadedState?: PreloadedState<RootState>): any => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export const store = setupStore()

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export default store;
