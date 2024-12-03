import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="container text-center my-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-1 text-danger">404</h1>
                    <p className="lead text-muted">Oops! The page you are looking for does not exist.</p>
                    <p>
                        <Link to="/" className="btn btn-primary">
                            Go to Home
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
