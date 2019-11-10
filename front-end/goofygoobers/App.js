import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Font, AppLoading } from 'expo';
import Chat from './components/Chat'
import Graph from './components/Graphs';

export default class App extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
        accessible
        accessibilityLabel='main'
        testID='main'>
        {/* <Chat /> */}
        <Graph />
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