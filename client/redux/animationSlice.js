import { createSlice } from '@reduxjs/toolkit';



const initialState = {
 hidden: true,
 interaction: false
}

const animationSlice = createSlice({
  name: 'animations',
  initialState,
  reducers: {
    setHidden(state, action) {
     state.hidden = action.payload    
    },
    setInteraction(state, action) {
     state.interaction = action.payload    
    },
  },
});

export const { setHidden, setInteration } = animationSlice.actions;
export default animationSlice.reducer;