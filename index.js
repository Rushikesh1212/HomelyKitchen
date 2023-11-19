/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';
// import {UseFetchProvider} from 'use-fetch-lib';

const RNRedux = () => (
    <Provider store={store}>
        {/* <PaperProvider> */}
        <App />
        {/* </PaperProvider> */}
    </Provider>


    // <Provider store={store}>
    //   <PaperProvider>
    //      <UseFetchProvider baseUrl="http://autoservices.nsofttek.com/Web/Web">
    //    </UseFetchProvider> 
    //   </PaperProvider>
    // </Provider>
  );
  AppRegistry.registerComponent(appName, () => RNRedux);
