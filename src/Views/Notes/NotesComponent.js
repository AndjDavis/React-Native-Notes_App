import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import NotesContainer from './NotesContainer';

 class NotesComponent extends Component {
 genNotes = () => {
   return this.props.notes.map((note) => {
     return <NotesContainer note={note} key={note._id} />
   })
 }
  render() {
    return (
      <View>
       {this.genNotes()}
      </View>
    );
  }
}

export default NotesComponent;