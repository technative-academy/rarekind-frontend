import { configureStore } from '@reduxjs/toolkit'
import popupReducer from '../Components/PopUp/popupSlice'

export const store = configureStore({
    reducer: {
        popup: popupReducer,
    },
})
