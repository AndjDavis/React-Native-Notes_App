import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class NotesContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <View style={styles.Notes}>
        <Text style={styles.Text}>{this.props.note.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Notes: {
    backgroundColor: '#474747',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    marginBottom: 15,
  },
  Text: {
    fontSize: 25,

  }
});
