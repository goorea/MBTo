import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import TabNavigation from './TabNavigation';
import { DarkTheme, DefaultTheme } from '~/themes';

const MainNavigation: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
