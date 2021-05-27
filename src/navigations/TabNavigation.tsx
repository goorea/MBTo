import React from 'react';
import Feed from '~/screens/Feed';
import SearchScreen from '~/screens/SearchScreen';
import HotScreen from '~/screens/HotScreen';
import MyScreen from '~/screens/MyScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '~/types/navigations';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext, ThemeContextState } from '~/contexts/ThemeContext';

type P = {};

const Tab = createBottomTabNavigator<MainTabParamList>();

const TabNavigation: React.FC<P> = () => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);
  const getIcon = (
    focused: boolean,
    color: string,
    value: string,
  ): React.ReactNode => (
    <Ionicons
      color={color}
      size={25}
      name={focused ? value : `${value}-outline`}
    />
  );

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.foreground,
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color }) => getIcon(focused, color, 'copy'),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => getIcon(focused, color, 'search'),
        }}
      />
      <Tab.Screen
        name="Hot"
        component={HotScreen}
        options={{
          tabBarIcon: ({ focused, color }) => getIcon(focused, color, 'heart'),
        }}
      />
      <Tab.Screen
        name="My"
        component={MyScreen}
        options={{
          tabBarIcon: ({ focused, color }) => getIcon(focused, color, 'person'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
