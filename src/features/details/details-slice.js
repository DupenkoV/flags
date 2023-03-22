import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountriesByName = createAsyncThunk(
    '@@details/load-country-by-name',
    (name, {extra: {client, api}}) => {
        return client.get(api.searchByCountry(name))
    }
)
export const loadNeighborsByBorder = createAsyncThunk(
    '@@details/load-neighbors',
    (borders, {extra: {client, api}}) => {
        return client.get(api.filterByCode(borders))
    }
)


const initialState = {
    currentCountry: '',
    status: 'idle',
    error: null,
    neighbors: [],
}

const detalisSlice = createSlice({
    name: '@@details',
    initialState,
    reducers: {
        clearDetails: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountriesByName.pending, (state) => {
                state.status = 'loading';
                state.error = null
            })
            .addCase(loadCountriesByName.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.meta.error;
            })
            .addCase(loadCountriesByName.fulfilled, (state, action) => {
                state.status = 'receidev';
                state.currentCountry = action.payload.data[0];
            })
            .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
                state.neighbors = action.payload.data.map(country => country.name)
            })
    }
})

export const {clearDetails} = detalisSlice.actions;
export const detailsReducer = detalisSlice.reducer;

export const selectCurrentCountry = (state) => state.details.currentCoutry;

export const selectDetails = (state) => state.details;

export const selectNeighbors = (state) => state.details.neighbors;