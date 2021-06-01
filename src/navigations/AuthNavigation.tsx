import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Login from '~/screens/auth/Login';
import EmailLogin from '~/screens/auth/EmailLogin';
import Register from '~/screens/auth/Register';
import FindEmail from '~/screens/auth/FindEmail';
import FindPassword from '~/screens/auth/FindPassword';
import { AuthParamList, MainTabParamList } from '~/types/navigations';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator<AuthParamList>();

type P = {
  navigation: BottomTabNavigationProp<MainTabParamList>;
  route: RouteProp<MainTabParamList, 'Profile'>;
};

const AuthNavigation: React.FC<P> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '뒤로',
        headerBackTitleStyle: styles.headerBackTitleStyle,
        title: '',
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EmailLogin" component={EmailLogin} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="FindEmail" component={FindEmail} />
      <Stack.Screen name="FindPassword" component={FindPassword} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerBackTitleStyle: {
    fontFamily: 'BMHANNAAir',
  },
});

export default AuthNavigation;
