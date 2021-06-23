import React from 'react';

const BlogInfo = (props) => {

    const { id, title, content, image, blogLink } = props.blog


    return (
        <div className="col-md-3 m-3 text-light">
            <div class="card card-bg focus h-100 mb-3 card-bg  border border-secondary border-3 rounded">
                <img src={image} className="card-img-top img-fluid h-100 w-100" alt="..." />
                <div className="card-body">
                    <h1 className="text-light display-6">{title}</h1>
                    <p className="text-light">{content}</p>
                </div>
                <div class="card-footer d-grid">
                    <a className="btn btn-secondary" href={`${blogLink}`} target="_blank" alt="" rel="noreferrer">Read Full Blogs</a>
                </div>
            </div>
        </div>
    );
};

export default BlogInfo;