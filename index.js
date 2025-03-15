/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import NetflixHomePage from './src/screens/homepage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NetflixHomePage);
