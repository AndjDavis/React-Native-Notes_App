import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './src/Redux/Reducers/Reducers'
import thunk from 'redux-thunk'
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/index';

let store = createStore(mainReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <Text>Your Notes</Text>
          <Header />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
