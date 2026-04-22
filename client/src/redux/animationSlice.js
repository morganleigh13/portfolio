import { createSlice } from '@reduxjs/toolkit';



const initialState = {
 hidden: true,
 interaction: false,
 search: ""
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
    setSearch(state, action) {
      console.log("search", action.payload)
      state.search = action.payload
    }
  },
});

export const { setHidden, setInteraction, setSearch } = animationSlice.actions;
export default animationSlice.reducer;