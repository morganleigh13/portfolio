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
      console.log("action", action.payload)
     state.interaction = action.payload    
    },
  },
});

export const { setHidden, setInteraction } = animationSlice.actions;
export default animationSlice.reducer;