import { createSlice } from "@reduxjs/toolkit";

const GenreSlice = createSlice({
    name: "songs",
    initialState: [],
    reducers: {
        add: (state, action) => {
            return [...state, { song: action.payload }]
        },
    }
});

export const filteredSongsSelector = (state) => {
    switch (state.filter) {
        case "all":
            return state.songs;
        case "Hip-hop/Rap":
            return state.songs.filter((elm) => elm.song.primaryGenreName == "Hip-hop/Rap");
        case "Rock":
            return state.songs.filter((elm) => elm.song.primaryGenreName == "Rock");    
        case "Dance":
            return state.songs.filter((elm) => elm.song.primaryGenreName == "Dance");
        default:
            break;
    }
}

export const { add } = GenreSlice.actions;
export const songsSelector = (state) => state.songs;

export default GenreSlice.reducer;