import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { GiftedChat } from 'react-native-gifted-chat'
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Font, AppLoading } from 'expo';
import Chat from './components/Chat'
import Graph from './components/Graphs'
import uuid from 'uuid'
import Articles from './components/Articles';
import FlipToggle from 'react-native-flip-toggle-button'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      gestureName: 'none',
      messages: [],
      darkMode: false,
      info: []
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
    this.reply(messages);
  }

  reply(message) {
    console.log(this.state.messages.length)
    if (this.state.messages.length === 2) {
      const goodNameMsg = {
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
        messages: GiftedChat.append(previousState.messages, goodNameMsg),
      }));
      const moreInfoMsg = {
        _id: uuid.v4(),
        createdAt: new Date(),
        text: "Tell me more about yourself. Preferably, your age, sex, weight, height. I'm just asking for a friend 🙈",
        user: {
          _id: 2,
          name: "Beer Bear",
          avatar: require('./BeerBear.png')
        }
      }
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, moreInfoMsg),
      }));
    } else if (this.state.messages.length === 5) {
      const info = this.parseInfo(message);
      const text = "So, you weigh " + info.weight + " measure " + info.height + " in height. Also you're a " + info.age + " year old " + info.gender + "."
      const fattyMsg = {
        _id: uuid.v4(),
        createdAt: new Date(),
        text,
        user: {
          _id: 2,
          name: "Beer Bear",
          avatar: require('./BeerBear.png')
        }
      }
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, fattyMsg),
      }));
    }
  }

  parseInfo(message) {
    const text = message[0].text.toLowerCase().split(" ");

    const genders = ["nb", "nonbinary", "non-binary", "f", "female", 'girl', 'woman', "m", "male", 'boy', 'man'];
    const coeffs = ["age", "weight", "height"];

    let obj = {};
    let index = 0;

    for (let i = 0; i < text.length; i++) {
      let genderIndex = genders.indexOf(text[i])
      if (!isNaN(text[i])) {
        obj[coeffs[index]] = text[i];
        index++;
      } else if (genderIndex !== -1) {

        if (genderIndex >= 0 && genderIndex <= 2) {
          obj["gender"] = "person";
        } else if (genderIndex >= 3 && genderIndex <= 6) {
          obj["gender"] = "girly";
        } else {
          obj["gender"] = "boy";
        }

      }
    }
    return obj;
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
          leftComponent={<Icon name="home" size={30} color="white" />}
          leftContainerStyle={{ flex: 2 }}
          centerComponent={{ text: 'Beer Bear', style: { color: '#fff' } }}
          rightComponent={<FlipToggle
            value={this.state.darkMode}
            buttonWidth={60}
            buttonHeight={30}
            buttonRadius={50}
            sliderWidth={10}
            sliderHeight={10}
            sliderRadius={1000}
            onLabel={'Light'}
            offLabel={'Dark'}
            buttonOnColor={'white'}
            buttonOffColor={'#333'}
            labelStyle={{ color: backgroundColor }}
            onToggle={() => this.toggleDarkMode()}
            onToggleLongPress={() => console.log('toggle long pressed!')}
          />}
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