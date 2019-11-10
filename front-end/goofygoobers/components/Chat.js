import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'

export default class Chat extends React.Component {
    renderInputToolbar(props) {
        const color = this.props.darkMode ? 'white' : 'black';
        return (
            < InputToolbar textInputStyle={{ color }} containerStyle={{ backgroundColor: props.background }
            }{...props} />
        )
    }

    render() {
        const background = this.props.darkMode ? styles.light : styles.dark;
        const color = this.props.darkMode ? 'white' : 'white';

        return (<View
            style={{ ...styles.container, ...background, color }}
            accessible
            accessibilityLabel='main'
            testID='main'>
            <GiftedChat
                messages={this.props.msgs}
                onSend={messages =>
                    this.props.onSend(messages)
                }
                user={{
                    _id: 1,
                }}
                renderInputToolbar={this.renderInputToolbar.bind(this)}
            />
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    dark: {
        backgroundColor: '#fff'
    },
    light: {
        backgroundColor: '#333'
    }
});
