import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchItemsByCollectionId = createAsyncThunk(
    'items/fetchItems',
    async (id) => {
        const URL = 'https://rarekind-backend-production.up.railway.app/animals'
        const response = await fetch(URL)
        return response.json()
    }
)
    
const itemsAPISlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsByCollectionId.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchItemsByCollectionId.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchItemsByCollectionId.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default itemsAPISlice.reducer
