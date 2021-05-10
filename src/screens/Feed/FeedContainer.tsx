import React from 'react';
import FeedPresenter from '~/screens/Feed/FeedPresenter';
import { Feed, User } from '~/types/instances';

type P = {};

const FeedContainer: React.FC<P> = () => {
  const hyungseok: User = {
    name: '정형석',
    nickname: '정형석',
    email: 'jhs851@naver.com',
    gender: 'male',
    mbti: 'ESTJ',
    avatar: 'https://via.placeholder.com/32x32',
  };
  const feeds: Feed[] = [...Array(10).keys()]
    .map(k => k + 1)
    .map(id => ({
      id,
      title: '안녕하세여',
      contents: '반갑습니디',
      created_at: '2021-05-09 13:36:38',
      like_count: 42,
      liked: false,
      user: hyungseok,
      comments: [
        {
          id: 1,
          contents: '나도 반가워',
          created_at: '2021-05-09 13:38;41',
          like_count: 0,
          liked: false,
          user: hyungseok,
        },
      ],
    }));

  return <FeedPresenter feeds={feeds} />;
};

export default FeedContainer;
