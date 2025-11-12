import { configureStore } from '@reduxjs/toolkit'
import popupReducer from '../Components/PopUp/popupSlice'
import darkModeReducer from '../Components/DarkMode/darkModeSlice'
import collectionAPISlice from '../API/collectionAPISlice'
import itemAPISlice from '../API/itemAPISlice'

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        darkmode: darkModeReducer,
        collections: collectionAPISlice,
        items: itemAPISlice,
    },
})
