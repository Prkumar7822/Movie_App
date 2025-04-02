import {AppRegistry} from 'react-native';
import App from './App';
import New from './new';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';


const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
const NewWithStore = () => (
  <Provider store={store}>
    <New />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithStore);
