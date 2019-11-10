import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { GiftedChat } from 'react-native-gifted-chat'
import { Header, Button } from 'react-native-elements';
// import { Font, AppLoading } from 'expo';
import Chat from './components/Chat'
import Graph from './components/Graphs'
import uuid from 'uuid'
import Articles from './components/Articles';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      gestureName: 'none',
      messages: [],
      darkMode: false,
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

  toggleDarkMode() {
    this.setState({ darkMode: !this.state.darkMode })
  }

  onSwipeUp(gestureState) {
    // this.setState({ myText: 'You swiped up!' });
  }

  onSwipeDown(gestureState) {
    // this.setState({ myText: 'You swiped down!' });
  }

  onSwipeLeft(gestureState) {
    if (this.state.page === -1) {
      this.setState({ page: 0 });
    } else if (this.state.page === 0) {
      this.setState({ page: 1 });
    }
  }

  onSwipeRight(gestureState) {
    if (this.state.page === 1) {
      this.setState({ page: 0 });
    } else if (this.state.page === 0) {
      this.setState({ page: - 1 });
    }
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

    const modeTitle = !this.state.darkMode ? "Dark Mode" : "Light Mode";
    const backgroundColor = this.state.darkMode ? "#333" : '#fff';

    return (
      <View
        style={{ ...styles.container, backgroundColor }}
        accessible
        accessibilityLabel='main'
        testID='main'>
        <Header
          leftComponent={<Button title={modeTitle} onPress={() => this.toggleDarkMode()} />}
          leftContainerStyle={{ flex: 2 }}
          centerComponent={{ text: 'Beer Bear', style: { color: '#fff' } }}
          rightComponent={<Button title={modeTitle} onPress={() => this.toggleDarkMode()} />}
          rightContainerStyle={{ flex: 2 }}
        />
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
          {/* {this.state.page ? : } */}
          {this.state.page === 0 && <Chat msgs={this.state.messages} onSend={(msg) => this.onSend(msg)} darkMode={this.state.darkMode} />}
          {this.state.page === 1 && <Graph darkMode={this.state.darkMode} />}
          {this.state.page === -1 && <Articles darkMode={this.state.darkMode} />}
        </GestureRecognizer>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});