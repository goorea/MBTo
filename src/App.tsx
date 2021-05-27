import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainNavigation from './navigations/MainNavigation';
import ThemeContextProvider from '~/contexts/ThemeContext';
import FlashMessage from '~/components/FlashMessage';

const App: React.FC = () => (
  <ThemeContextProvider>
    <SafeAreaView style={styles.container}>
      <MainNavigation />
      <FlashMessage />
    </SafeAreaView>
  </ThemeContextProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
