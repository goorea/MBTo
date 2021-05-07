import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import EmailLogin from '~/screens/auth/EmailLogin';

AppRegistry.registerComponent(appName, () => EmailLogin);
