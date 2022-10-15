/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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
import Navigation from './Navigation';
import Main from './Navigation';
import { createStore } from 'redux';

import reducers from './Reducer/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducers);


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App: () => Node = () => {


  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
      <>
        <Provider store={store}>
            <Main />
        </Provider>
      </>
  );
};


export default App;
