import { AppRegistry } from 'react-native';
import Feed from './src/screens/Feed';
import { name as appName } from './app.json';
import '~/plugins/moment';

AppRegistry.registerComponent(appName, () => Feed);
