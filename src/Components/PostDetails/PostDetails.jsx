import React from 'react';
import { useNavigate } from 'react-router-dom';

function PostDetails({ post, isLoading }) {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    if (isLoading) {
        return (
            <div className="card mt-4">
                <div className="card-body">
                    <p>Loading post details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h5>Post ID: {id}</h5>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer">
                <button onClick={handleBack} className="btn btn-secondary">Back</button>
            </div>
        </div>
    );
}

export default PostDetails;
