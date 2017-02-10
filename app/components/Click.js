import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateCounter } from '../reducers/counter'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
// reducer imports

//import component

// import packages


class click extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => {this.props.updateCounter()}}>
          <Text>
            How badly I want FrenchToast: {this.props.counterValue}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    counterValue: state.counterValue
  }
}

const mapDispatchToProps = dispatch => ({
  updateCounter: () => {
    dispatch(updateCounter())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(click)
