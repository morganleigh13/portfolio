import { configureStore } from '@reduxjs/toolkit'
import animationReducer from './redux/animationSlice'
// import { listenerMiddleware } from './redux/localStorageMiddleware'


export const store = configureStore({
    reducer: {
      animations: animationReducer,
    //   themes: themeReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listenerMiddleware.middleware)
})