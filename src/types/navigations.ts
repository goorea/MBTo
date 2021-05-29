import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  TabNavigation: NavigatorScreenParams<MainTabParamList>;
  AuthNavigation: NavigatorScreenParams<AuthParamList>;
};

export type MainTabParamList = {
  Feed: undefined;
  Search: undefined;
  Hot: undefined;
  Profile: undefined;
};

export type AuthParamList = {
  Login: undefined;
  EmailLogin: undefined;
  Register: undefined;
  FindEmail: undefined;
  FindPassword: undefined;
};
