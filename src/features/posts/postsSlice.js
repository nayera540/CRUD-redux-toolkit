import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, addPost, deletePost, fetchPost} from "../../network/postsApis";
export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle",
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = action.payload;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter((post) => post.id !== action.payload);
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.postDetails = action.payload;
            })
    },
});
export { fetchPosts, addPost, deletePost, fetchPost };
export default postsSlice.reducer;
