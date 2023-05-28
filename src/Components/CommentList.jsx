import React from 'react';
import CommentPost from "./CommentPost";

const CommentList = ({ posts, remove }) => {
    return (
        <div>
            <h1><b>Отзывы</b></h1>
            {posts.length === 0 ? (
                <p>Нету отзывов, оставьте какой-нибудь отзыв:)</p>
            ) : (
                posts.map((post, index) => (
                    <CommentPost remove={remove} number={index + 1} post={post} key={post.id} />
                ))
            )}
        </div>
    );
};

export default CommentList;
