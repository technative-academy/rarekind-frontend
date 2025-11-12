import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchItemsByCollectionId = createAsyncThunk(
    'items/fetchItems',
    async (id) => {
        const URL =
            'https://rarekind-backend-production.up.railway.app/animals'
        const response = await fetch(`${URL}/${id}`) 
        console.log(response)
        return response.json()
    }
)

const itemsAPISlice = createSlice({
    name: 'items',
    initialState: {
        items: 'null',
        status: 'idle',
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default itemsAPISlice.reducer