import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  Dimensions,
  ToastAndroid
} from 'react-native';
const { width, height } = Dimensions.get('window')


export class App extends Component {
  componentWillMount() {
    const me=this;
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const dx=Math.abs(gestureState.dx);
        // console.log('onMoveShouldSetPanResponder',dx);
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
        me.accept("contX",dx);
        // ToastAndroid.show('dx '+dx, ToastAndroid.SHORT);
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

  constructor(props){
    super(props);
    this.state={}
    this.accept=this.accept.bind(this);
  }

  render() {
    console.log(styles)
    var contX=this.state.contX||0;
    return (
      <View style={[containerStyle,{left:contX}]}>
        <View style={styles.leftlist} {...this._panResponder.panHandlers}>
          <View style={styles.card}  >
            <Text style={styles.text}>1</Text>
          </View>
        </View>
        <View style={styles.rightlist} >
          <View style={styles.card}>
            <Text style={styles.text}>2</Text>
          </View>
        </View>
      </View>
    );
  }

  accept(msg,data){
    var state=this.state||{}; //获取当前的state值
    const fns={
      "contX":setContainerX, //响应msg的函数列表
    }
    if(fns[msg]){ //如果有响应函数，用响应函数处理state后刷新组件
      state=fns[msg](state,data,msg);
      this.setState(state);
    }
  }
}

function setContainerX(state,data,msg) {
  state.contX=data;
  return state;
}

var containerStyle={
    position:"relative",
    backgroundColor: '#F5FCFF',
    height:height,
    width:width*2
  };
const styles = StyleSheet.create({

  leftlist:{
    position:"absolute",
    backgroundColor: 'lightgreen',
    width:width,
    height:height
  },
  rightlist:{
    position:"absolute",
    backgroundColor: 'lightblue',
    width:width,
    height:height,
    left:width,
  },
  card:{
    width:width,
    height:height,
    borderWidth: 2,
    borderColor: 'gray',
    borderStyle:'dashed',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } ,
  text:{
    fontSize:72
  }
});

import {AppRegistry } from 'react-native';
AppRegistry.registerComponent('AwesomeProject', () => App);



// import {AppRegistry } from 'react-native';
// AppRegistry.registerComponent('AwesomeProject', () => App);

