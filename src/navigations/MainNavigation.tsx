import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '~/screens/FeedScreen';
import SearchScreen from '~/screens/SearchScreen';
import HotScreen from '~/screens/HotScreen';
import MyScreen from '~/screens/MyScreen';

const Tab = createBottomTabNavigator();

const MainNavigation: React.FC = () => {
  let getIconName: Function = (
    focused: boolean,
    value: string,
  ): JSX.Element => (
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
            tabBarIcon: ({ focused }) => getIconName(focused, 'copy'),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => getIconName(focused, 'search'),
          }}
        />
        <Tab.Screen
          name="Hot"
          component={HotScreen}
          options={{
            tabBarIcon: ({ focused }) => getIconName(focused, 'heart'),
          }}
        />
        <Tab.Screen
          name="My"
          component={MyScreen}
          options={{
            tabBarIcon: ({ focused }) => getIconName(focused, 'person'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
