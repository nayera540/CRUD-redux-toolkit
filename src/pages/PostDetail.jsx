import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchPost } from "../network/postsApis";
import PostDetails from "../Components/PostDetails/PostDetails";

function PostDetail() {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const dispatch = useDispatch();
    const postDetails = useSelector((state) => state.postsData.postDetails);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        dispatch(fetchPost(postId));
    }, [dispatch, postId]);

    useEffect(() => {
        if (postDetails && postDetails.id === parseInt(postId)){
            setPost({
                id: postDetails.id,
                title: postDetails.title,
                body: postDetails.body
            });
            setIsLoading(false)
        }
        
    }, [postDetails]);

    console.log(postDetails);
    

    return (
        <div className="container">
            <div className="post">
                {postDetails? (
                    <PostDetails post={post} isLoading={isLoading}/>
                ) : (
                    <p>Fetching post details...</p>
                )}
            </div>
        </div>
    )
}

export default PostDetail;
