import React, { FC } from 'react';
import { Icon } from 'semantic-ui-react';
import { PostStatsProps } from './PostStatsProps';
import './Post.css';
import { useLike } from './LikeLogic';

export const PostStats: FC<PostStatsProps> = ({ id, likes, comments }) => {
    const [isLiked, likesCount, toggleLike] = useLike(likes, false);

    return (
        <div className="post-stats-container">
            <p className="post-comments">
                <Icon name="comment" />
                {comments} comments
            </p>
            <p className="post-likes" onClick={() => toggleLike()}>
                {isLiked ? (
                    <Icon name="heart" className="like-button" />
                ) : (
                    <Icon name="heart outline" className="liked-button" />
                )}
                {likesCount} Likes
            </p>
        </div>
    );
};
