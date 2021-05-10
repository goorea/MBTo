import React from 'react';
import FeedCardPresenter from './FeedCardPresenter';
import { Feed } from '~/types/instances';

type P = {
  feed: Feed;
};

const FeedCardContainer: React.FC<P> = ({ feed }: P) => {
  const [feedState, setFeed] = React.useState<Feed>(feed);
  const toggleLike = () => {
    setFeed({
      ...feedState,
      like_count: feedState.like_count + (feedState.liked ? -1 : 1),
      liked: !feedState.liked,
    });
  };
  const share = () => {};

  return (
    <FeedCardPresenter feed={feedState} toggleLike={toggleLike} share={share} />
  );
};

export default FeedCardContainer;
