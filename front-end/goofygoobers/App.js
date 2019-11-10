import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
// import { Font, AppLoading } from 'expo';
import Chat from './components/Chat'
import Graph from './components/Graphs';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      gestureName: 'none',
      backgroundColor: '#fff',
      myText: ''
    };
  }

  onSwipeUp(gestureState) {
    this.setState({ myText: 'You swiped up!' });
  }

  onSwipeDown(gestureState) {
    this.setState({ myText: 'You swiped down!' });
  }

  onSwipeLeft(gestureState) {
    this.setState({ myText: 'You swiped left!', page: this.state.page - 1 });
  }

  onSwipeRight(gestureState) {
    this.setState({ myText: 'You swiped right!', page: this.state.page + 1 });
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({ backgroundColor: 'red' });
        break;
      case SWIPE_DOWN:
        this.setState({ backgroundColor: 'green' });
        break;
      case SWIPE_LEFT:
        this.setState({ backgroundColor: 'blue' });
        break;
      case SWIPE_RIGHT:
        this.setState({ backgroundColor: 'yellow' });
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.6,
      directionalOffsetThreshold: 80
    };

    return (
      <View
        style={styles.container}
        accessible
        accessibilityLabel='main'
        testID='main'>
        <GestureRecognizer
          onSwipe={() => this.onSwipe()}
          onSwipeUp={() => this.onSwipeUp()}
          onSwipeDown={() => this.onSwipeDown()}
          onSwipeLeft={() => this.onSwipeLeft()}
          onSwipeRight={() => this.onSwipeRight()}
          config={config}
          style={{
            flex: 1,
            backgroundColor: this.state.backgroundColor
          }}
        >
          {this.state.page ? <Graph /> : <Chat />}
          {/* <Text>{this.state.myText}</Text> */}
          {/* <Text>onSwipe callback received gesture: {this.state.gestureName}</Text> */}
          {/* {this.state.page ? <Chat /> : <Graph />} */}
        </GestureRecognizer>
        {/* <Text>onSwipe callback received gesture: {this.state.gestureName}</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});