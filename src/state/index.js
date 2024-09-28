import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user; // Fixed typo: action.playload -> action.payload
            state.token = action.payload.token; // Fixed typo: action.playload -> action.payload
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends; // Fixed typo: action.playload -> action.payload
            } else {
                console.error("User friends not existent :(");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts; // Fixed typo: action.playload -> action.payload
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) return action.payload.post; // Fixed typo: action.playload -> action.payload
                return post;
            });
            state.posts = updatedPosts;
        },
    },
});

export const { setMode, setLogin, setLogout, setFriends, setPost, setPosts } = authSlice.actions;
export default authSlice.reducer;
