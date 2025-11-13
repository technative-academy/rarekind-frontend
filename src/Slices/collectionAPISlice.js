import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import makeApiRequest from '../services/apiService'

export const fetchCollections = createAsyncThunk(
    'collections/fetchCollections',
    async () => {
        const data = await makeApiRequest('collections')
        return data
    }
)

const collectionAPISlice = createSlice({
    name: 'collections',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollections.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCollections.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchCollections.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default collectionAPISlice.reducer
