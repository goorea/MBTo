import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainTabParamList, RootStackParamList } from '~/types/navigations';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

type P = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<RootStackParamList>,
    BottomTabNavigationProp<MainTabParamList>
  >;
  route: RouteProp<MainTabParamList, 'Profile'>;
};

const Profile: React.FC<P> = ({ navigation }: P) => {
  React.useEffect(() => {
    navigation.navigate('AuthNavigation', {
      screen: 'Login',
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen!</Text>
    </View>
  );
};

export default Profile;
