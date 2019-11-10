import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Button } from 'react-native-elements';
import uuid from 'uuid'

export default class Chat extends React.Component {
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
                        avatar: require('../galarian_zigzagoon.jpg'),
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
        return (<View
            style={styles.container}
            accessible
            accessibilityLabel='main'
            testID='main'>
            <GiftedChat
                messages={this.state.messages}
                onSend={messages =>
                    this.onSend(messages)
                }
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
                    name: "Joe Mama",
                    avatar: require('../galarian_zigzagoon.jpg')
                }
            })} />
        </View>)
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
