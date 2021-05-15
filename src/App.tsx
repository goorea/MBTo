import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainNavigation from './navigations/MainNavigation';

const App: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <MainNavigation />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
