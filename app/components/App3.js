/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
} from 'react-native';

import { Touchable } from './Touchable';

export class App extends Component {
  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const dx=Math.abs(gestureState.dx);
        console.log('onMoveShouldSetPanResponder',dx);
        return dx>20;//发生大于20的水平偏移时才作为响应者
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

      onPanResponderGrant: (evt, gestureState) => {
        // The guesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.{x,y}0 will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        const dx=gestureState.dx;
        console.log('onPanResponderMove',dx);
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftlist}>
          <View style={styles.card}  >
            <Text style={styles.text}>1</Text>
          </View>
        </View>
        <View style={styles.rightlist}>
          <View style={styles.card}>
            <Text style={styles.text}>2</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:"relative",
    backgroundColor: '#F5FCFF',
    height:"100%"
  },
  leftlist:{
    position:"absolute",
    backgroundColor: 'lightgreen',
    width:"100%",
    height:"100%"
  },
  rightlist:{
    position:"absolute",
    backgroundColor: 'lightblue',
    width:"100%",
    height:"100%",
    left:"100%",
  },
  card:{
    width:"100%",
    height:"100%",
    borderWidth: 2,
    borderColor: 'gray',
    borderStyle:'dashed',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } ,
  text:{
    fontSize:"72px"
  }
});
