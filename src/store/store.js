import { configureStore } from '@reduxjs/toolkit'
import popupReducer from '../Components/PopUp/popupSlice'
import darkModeReducer from '../Components/DarkMode/darkModeSlice'
import toggleReducer from '../Slices/toggleContentSlice'
import collectionAPISlice from '../API/collectionAPISlice'

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        darkmode: darkModeReducer,
        toggle: toggleReducer,
        collections: collectionAPISlice,
    },
})
