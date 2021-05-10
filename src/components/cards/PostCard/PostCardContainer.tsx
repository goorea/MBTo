import React from 'react';
import PostCardPresenter from 'src/components/cards/PostCard/PostCardPresenter';
import { Post } from '~/types/instances';

type P = {
  post: Post;
};

const PostCardContainer: React.FC<P> = ({ post }: P) => {
  const [postState, setPost] = React.useState<Post>(post);
  const toggleLike = () => {
    setPost({
      ...postState,
      like_count: postState.like_count + (postState.liked ? -1 : 1),
      liked: !postState.liked,
    });
  };
  const share = () => {};

  return (
    <PostCardPresenter post={postState} toggleLike={toggleLike} share={share} />
  );
};

export default PostCardContainer;
