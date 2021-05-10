import React from 'react';
import { Feed } from '~/types/instances';
import FeedCard from '~/components/cards/FeedCard';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

type P = {
  feeds: Feed[];
};

const FeedPresenter: React.FC<P> = ({ feeds }: P) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feeds}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <FeedCard feed={item} />}
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
