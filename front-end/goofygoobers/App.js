import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from 'expo';
import { Button } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat'
import uuid from 'uuid'

// export default function App() {

//   const [count, setCount] = useState(0);
//   const [messages, setMessages] = useState([]);
//   const [prev, setPrev] = useState([]);

//   useEffect(() => {
//     initialize();
//   }, [])

//   const initialize = () => {
//     messages.append("hi")
//     console.log(messages);
//     // setMessages(messages.append({
//     //   _id: 1,
//     //   text: 'Hello developer',
//     //   createdAt: new Date(),
//     //   user: {
//     //     _id: 2,
//     //     name: 'React Native',
//     //     // avatar: 'https://placeimg.com/140/140/any',
//     //   },
//     // }));
//   }

//   return (
//     <View style={styles.container}>
//       <Text>ur drunk in love ugh {count}</Text>
//       <Button title="add" onPress={() => setCount(count + 1)} />
//       <GiftedChat
//         messages={messages}
//         onSend={messages2 => {
//           setPrev(messages);
//           setMessages(GiftedChat.append(prev, messages2))
//         }}
//         user={{
//           _id: 1,
//         }}
//       />
//       {/* <Examples /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: { flex: 1 },
})

export default class App extends React.Component {
  state = {
    messages: [],
    count: 0
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Joe Mama',
            // avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <View
        style={styles.container}
        accessible
        accessibilityLabel='main'
        testID='main'>
        <Text>hey</Text>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => {
            this.onSend(messages);
            console.log(messages);
          }}
          user={{
            _id: 1,
          }}
        />
        <Button title="fuck me" onPress={() => this.onSend({
          _id: uuid.v4(),
          createdAt: new Date(),
          text: "fuck me",
          user: {
            _id: 1,
          }
        })} />
        <Button title="fuck you" onPress={() => this.onSend({
          _id: uuid.v4(),
          createdAt: new Date(),
          text: "fuck you",
          user: {
            _id: 2,
            name: "Joe Mama"
          }
        })} />
      </View>
    )
  }
}
