import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import FindPassword from '~/screens/auth/FindPassword';

AppRegistry.registerComponent(appName, () => FindPassword);
