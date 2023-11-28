import { createSlice } from "@reduxjs/toolkit";
import { listCharacters } from "./ characters";

export interface Characters {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  imageUrl: string;
}

const initialState: Characters[] = [];

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(listCharacters.pending,()=>{
      console.log("listCharacters loading...")
    })
    builder.addCase(listCharacters.fulfilled,(state,action)=>{
      if(!action.payload){
        return;
      }
      state = action.payload
      return state
    })
  },
});

// exportamos nosso reducer slice para prover para a app (store)
export default charactersSlice.reducer;
