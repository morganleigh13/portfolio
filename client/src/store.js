import { configureStore } from '@reduxjs/toolkit'
import animationReducer from './redux/animationSlice'
import messageReducer from "./redux/messageSlice"
// import { listenerMiddleware } from './redux/localStorageMiddleware'


export const store = configureStore({
    reducer: {
      animations: animationReducer,
      messages: messageReducer
    //   themes: themeReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listenerMiddleware.middleware)
})