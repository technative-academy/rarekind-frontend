import { createSlice } from '@reduxjs/toolkit'

const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        selectedPopup: null,
    },
    reducers: {
        openPopup: (state, action) => {
            state.selectedPopup = action.payload
        },
        closePopup: (state) => {
            state.selectedPopup = null
        },
    },
})

export const { openPopup, closePopup } = popupSlice.actions
export default popupSlice.reducer
