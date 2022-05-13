import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: "filter",
    initialState: "all",
    reducers: {
        setFilter: (state, action) => {
            return action.payload;
        }
    }
})


export const { setFilter } = FilterSlice.actions;
export const filterSelector = (state) => state.filter;
export default FilterSlice.reducer;