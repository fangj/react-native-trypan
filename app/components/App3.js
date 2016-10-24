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
} from 'react-native';

import { Touchable } from './Touchable';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftlist}>
          <View style={styles.card}>
            <Text>Left</Text>
          </View>
        </View>
        <View style={styles.rightlist}>
          <View style={styles.card}>
            <Text>Right</Text>
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
    height:"100%",
    left:"-20px"
  },
  leftlist:{
    position:"absolute",
    backgroundColor: 'green',
    width:"100%",
    height:"100%"
  },
  rightlist:{
    position:"absolute",
    backgroundColor: 'red',
    width:"100%",
    height:"100%",
    left:"100%",
  },
  card:{
    width:"100%",
    height:"100%",
    borderWidth: 2,
    borderColor: 'black',
    borderStyle:'dashed'
  }
  ,
});
