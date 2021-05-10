export type MBTI =
  | 'ESTJ'
  | 'ESTP'
  | 'ESFJ'
  | 'ESFP'
  | 'ENTJ'
  | 'ENTP'
  | 'ENFJ'
  | 'ENFP'
  | 'ISTJ'
  | 'ISTP'
  | 'ISFJ'
  | 'ISFP'
  | 'INTJ'
  | 'INTP'
  | 'INFJ'
  | 'INFP';

export type User = {
  name: string;
  nickname: string;
  email: string;
  gender: 'male' | 'female';
  mbti: MBTI;
  avatar?: string;
};

export type Likeable = {
  like_count: number;
  liked: boolean;
};

export type Comment = Likeable & {
  id: number;
  contents: string;
  created_at: string | Date;
  user: User;
};

export type Post = Likeable & {
  id: number;
  title: string;
  contents: string;
  created_at: string | Date;
  user: User;
  comments: Comment[];
};
