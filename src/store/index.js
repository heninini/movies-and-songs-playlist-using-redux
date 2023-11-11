import { configureStore } from "@reduxjs/toolkit";

import { movieReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { songsReducer, addSong, removeSong } from "./slices/songSlice";
import { reset } from "./actions";
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: movieReducer,
  },
});

console.log(store.state);

export { store };
export { reset, addSong, removeSong, addMovie, removeMovie };
