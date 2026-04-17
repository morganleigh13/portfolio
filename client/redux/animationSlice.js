import { createSlice } from '@reduxjs/toolkit';



const initialState = {
 hidden: true
}

const animationSlice = createSlice({
  name: 'animations',
  initialState,
  reducers: {
    setHidden(state, action) {
     state.hidden = action.payload    
    },
  },
});

export const { setHidden} = animationSlice.actions;
export default animationSlice.reducer;