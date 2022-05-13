import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import songsReducer from "./components/slices/GenreSlice";
import filterReducer from "./components/slices/FilterSlice";
import { combineReducers } from 'redux';
import {
    persistReducer
} from 'redux-persist';

const reducers = combineReducers({ songs: songsReducer, filter: filterReducer });

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
});