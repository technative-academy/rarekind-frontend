import { configureStore } from '@reduxjs/toolkit'
import popupReducer from '../Components/PopUp/popupSlice'
import darkModeReducer from '../Slices/darkModeSlice'
import collectionsReducer from '../Slices/collectionAPISlice'
import authReducer from '../Slices/authSlice'
import toastReducer from '../Slices/toastSlice'
import darkModeReducer from '../Components/DarkMode/darkModeSlice'
import toggleReducer from '../Slices/toggleContentSlice'
import collectionAPISlice from '../API/collectionAPISlice'

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        darkmode: darkModeReducer,
        collections: collectionsReducer,
        auth: authReducer,
        toast: toastReducer,
        toggle: toggleReducer,
        collections: collectionAPISlice,
    },
})
