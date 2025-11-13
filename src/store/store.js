import { configureStore } from '@reduxjs/toolkit'
import popupReducer from '../Components/PopUp/popupSlice'
import darkModeReducer from '../Components/DarkMode/darkModeSlice'
import toggleReducer from '../Slices/toggleContentSlice'
import collectionAPISlice from '../API/collectionAPISlice'
import itemsAPISlice from '../API/itemAPISlice'

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        darkmode: darkModeReducer,
        collections: collectionAPISlice,
        toggle: toggleReducer,
        items: itemsAPISlice,
    }, 
})

