import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import { ThemeContext, ThemeContextState } from '~/contexts/ThemeContext';

const MainNavigation: React.FC = () => {
  const { dark, colors } = React.useContext<ThemeContextState>(ThemeContext);

  return (
    <NavigationContainer
      theme={{
        dark,
        colors: {
          primary: colors.primary,
          background: colors.background,
          card: colors.background,
          text: colors.foreground,
          border: colors.foreground,
          notification: colors.foreground,
        },
      }}>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
