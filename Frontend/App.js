import React from 'react';
import { StyleSheet, SafeAreaView, AsyncStorage } from 'react-native';
import MyApp from './src/Navigator'
import { Font } from 'expo';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Cairo-Bold': require('./assets/fonts/Cairo-Bold.ttf'),
      'Cairo-SemiBold': require('./assets/fonts/Cairo-SemiBold.ttf'),
      'Cairo-Regular': require('./assets/fonts/Cairo-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  clearAsyncStorage = async () => {
      AsyncStorage.clear()
  }


  render() {
    return (
      this.state.fontLoaded ? <Provider store={createStore(reducers)}>
                                <MyApp />
                              </Provider> : null
    );
  }
}