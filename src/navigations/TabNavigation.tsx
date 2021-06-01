import React from 'react';
import Feed from '~/screens/Feed';
import SearchScreen from '~/screens/SearchScreen';
import HotScreen from '~/screens/HotScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList, RootStackParamList } from '~/types/navigations';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '~/contexts/ThemeContext';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ThemeContextState } from '~/types/themes';
import Profile from '~/screens/Profile';

type P = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'TabNavigation'>;
};

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
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => getIcon(focused, color, 'person'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
