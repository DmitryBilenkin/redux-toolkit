import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
    name: 'photo',
    initialState: {
        photos:[]
    },
    reducers:{
        addPhoto(state, action){
            state.photos.push(action.payload)
        }
    }
});

export const {addPhoto} = photoSlice.actions;
export default photoSlice.reducer;