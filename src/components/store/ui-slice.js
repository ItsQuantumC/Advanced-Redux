import { createSlice } from '@reduxjs/toolkit';

const uiSlice  = createSlice({
    name: 'ui',
    initialState: { cartisVisible: false },
    reducers: { 
        toggle(state) {
            state.cartisVisible = !state.cartisVisible;
        }
    }
})

export default uiSlice;

export const uiActions = uiSlice.actions;