/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider as ProviderPaper, Snackbar} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {MenuProvider} from 'react-native-popup-menu';
import {DimensionProvider} from './src/hooks/DimensionProvider';
import {ThemeProvider} from './src/Provider/ThemeProvider';
import {Theme} from './src/constants';
import Routes from './src/config/routes';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <MenuProvider>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <ThemeProvider theme={Theme}>
          <DimensionProvider>
              {/* <AppContainer /> */}
              <Routes />
              {/* <ToastProvider toast={toast} /> */}
          </DimensionProvider>
        </ThemeProvider>
      </MenuProvider>
  </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
