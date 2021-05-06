import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '~/screens/FeedScreen';
import SearchScreen from '~/screens/SearchScreen';
import HotScreen from '~/screens/HotScreen';
import MyScreen from '~/screens/MyScreen';
import { MainTabParamList } from '~/types/navigation';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainNavigation: React.FC = () => {
  const getIcon: Function = (focused: boolean, value: string): JSX.Element => (
    <Ionicons size={25} name={focused ? value : `${value}-outline`} />
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            tabBarIcon: ({ focused }) => getIcon(focused, 'copy'),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => getIcon(focused, 'search'),
          }}
        />
        <Tab.Screen
          name="Hot"
          component={HotScreen}
          options={{
            tabBarIcon: ({ focused }) => getIcon(focused, 'heart'),
          }}
        />
        <Tab.Screen
          name="My"
          component={MyScreen}
          options={{
            tabBarIcon: ({ focused }) => getIcon(focused, 'person'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
