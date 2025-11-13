import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchItemsByCollectionId = createAsyncThunk(
    'items/fetchItemsByCollectionId',
    async (collectionId) => {
        const URL = 'https://rarekind-backend-production.up.railway.app/animals'
        const response = await fetch(`${URL}`)
        const data = await response.json()

        // normalize the API response in case data is not an array

        let items = []
        if (Array.isArray(data)) {
            items = data
        }

        // filter items by collection Id

        items = items.filter(
            (item) => String(item.collection_id) === String(collectionId)
        )
        return items
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
