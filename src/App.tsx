import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainNavigation from './navigations/MainNavigation';
import FlashMessage from '~/components/FlashMessage';

const App: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <MainNavigation />

    <FlashMessage />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
