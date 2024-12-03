import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// fetch Posts data
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
});

// adding new post
export const addPost = createAsyncThunk("posts/addPost", async (postInfo) => {
    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postInfo
    );
    return response.data;
});

// delete post
export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
    const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
    return postId;
});

// fetch speific post data
export const fetchPost = createAsyncThunk("posts/fetchPost", async (postId) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
    return response.data;
});
