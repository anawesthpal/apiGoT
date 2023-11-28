import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { listCharacters } from "./ characters";


export interface Characters {
  id: 0;
  fullName: string;
  title: string;
  family: string;
  favorite: boolean;
  image: string;
  imageapi: string;
}

const initialState: Characters = listCharacters;

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    

    toggleFavorito: (state, action: PayloadAction<{ id: number }>) => {
      const temp = [...state];

      const index = temp.findIndex((foto) => foto.id === action.payload.id);

      if (index !== -1) {
        // true = false
        // false = true
        temp[index].favorite = !temp[index].favorite;
      }

      state = [...temp];
    },

  },
});

// exportamos as acoes para utilizar nos compenentes
export const { toggleFavorito} = albumSlice.actions;
// exportamos nosso reducer slice para prover para a app (store)
export default albumSlice.reducer;
