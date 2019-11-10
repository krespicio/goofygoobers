import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { GiftedChat } from 'react-native-gifted-chat'
// import { Font, AppLoading } from 'expo';
import Chat from './components/Chat'
import Graph from './components/Graphs'
import uuid from 'uuid'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      gestureName: 'none',
      messages: [],
    };
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: uuid.v4(),
          createdAt: new Date(),
          text: "What is you name?",
          user: {
            _id: 2,
            name: "Beer Bear",
            avatar: require('./BeerBear.png')
          }
        },
        {
          _id: 1,
          text: 'Hey there! My name is Beer Bear and I’m here to help you drink responsibly 😋',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Beer Bear',
            avatar: require('./BeerBear.png'),
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    this.reply();
  }

  reply() {
    if (this.state.messages.length === 2) {
      console.log('hi')
      const msg = {
        _id: uuid.v4(),
        createdAt: new Date(),
        text: "That's a pretty sexy name!",
        user: {
          _id: 2,
          name: "Beer Bear",
          avatar: require('./BeerBear.png')
        }
      }
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, msg),
      }));
    }
  }

  onSwipeUp(gestureState) {
    // this.setState({ myText: 'You swiped up!' });
  }

  onSwipeDown(gestureState) {
    // this.setState({ myText: 'You swiped down!' });
  }

  onSwipeLeft(gestureState) {
    this.setState({ page: this.state.page - 1 });
  }

  onSwipeRight(gestureState) {
    this.setState({ page: this.state.page + 1 });
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
          {/* <Text style={{ fontSize: 100 }}>{this.state.messages[0].text}</Text> */}
          {this.state.page ? <Graph /> : <Chat msgs={this.state.messages} onSend={(msg) => this.onSend(msg)} />}
        </GestureRecognizer>
      </View >
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