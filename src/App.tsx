import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainNavigation from './navigations/MainNavigation';
import ThemeContextProvider from '~/contexts/ThemeContext';

const App: React.FC = () => (
  <ThemeContextProvider>
    <SafeAreaView style={styles.container}>
      <MainNavigation />
    </SafeAreaView>
  </ThemeContextProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
