import { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';

export const useLike: (
    likes: number,
    liked: Boolean
) => [isLiked: Boolean, likesCount: number, toggleLike: Function] = (
    likes,
    liked
) => {
    const [likesCount, Like, DisLike] = useCounter(likes);
    const [isLiked, setLiked] = useState(liked);

    const toggleLike = () => {
        if (isLiked) {
            DisLike();
            setLiked(false);
        } else {
            Like();
            setLiked(true);
        }
    };

    return [isLiked, likesCount, toggleLike];
};
