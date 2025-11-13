import { createSlice } from '@reduxjs/toolkit'

const toggleContentSlice = createSlice({
    name: 'toggle',
    initialState: {
        selectedToggle: false,
    },
    reducers: {
        showContent: (state, action) => {
            state.selectedToggle = action.payload
        },
        hideContent: (state) => {
            state.selectedToggle = false
        },
    },
})

export const { showContent, hideContent } = toggleContentSlice.actions
export default toggleContentSlice.reducer
