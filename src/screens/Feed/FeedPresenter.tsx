import React from 'react';
import { Post } from '~/types/instances';
import PostCard from '~/components/cards/PostCard';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

type P = {
  posts: Post[];
};

const FeedPresenter: React.FC<P> = ({ posts }: P) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedPresenter;
