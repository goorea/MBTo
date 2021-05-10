import React from 'react';
import { Comment } from '~/types/instances';
import CommentPresenter from './CommentPresenter';

type P = {
  comment: Comment;
};

const CommentContainer: React.FC<P> = ({ comment }: P) => {
  const [commentState, setComment] = React.useState<Comment>(comment);
  const toggleLike = () => {
    setComment({
      ...commentState,
      like_count: commentState.like_count + (commentState.liked ? -1 : 1),
      liked: !commentState.liked,
    });
  };

  return <CommentPresenter comment={commentState} toggleLike={toggleLike} />;
};

export default CommentContainer;
