import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import { ThemeContext } from '~/contexts/ThemeContext';
import { enableScreens } from 'react-native-screens';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { RootStackParamList } from '~/types/navigations';
import { ThemeContextState } from '~/types/themes';
import AuthNavigation from '~/navigations/AuthNavigation';

enableScreens();
const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation: React.FC = () => {
  const { dark, colors } = React.useContext<ThemeContextState>(ThemeContext);
  const theme: Theme = {
    dark,
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.background,
      text: colors.foreground,
      border: colors.foreground,
      notification: colors.foreground,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
