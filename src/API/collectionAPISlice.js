import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCollections = createAsyncThunk(
    'collections/fetchCollections',
    async () => {
        const URL =
            'https://rarekind-backend-production.up.railway.app/collections'
        const response = await fetch(URL) 
            
        
        console.log(response)
        return response.json()
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
