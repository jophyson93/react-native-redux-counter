import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// reducer imports
import counter from './app/reducers/counter'

//import component
import Click from './app/components/Click'

// import packages
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'

//REDUX STORE
const reducer = combineReducers({counter})
const logger = createLogger()
let store = createStore(counter, applyMiddleware(logger))

export default class exampleCounter extends Component {
  render() {
    return (
      <Provider store={store}> 
        <View style={styles.container}>
          <Click />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('exampleCounter', () => exampleCounter);
