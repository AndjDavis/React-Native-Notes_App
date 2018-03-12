import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { connect } from 'react-redux'
import { loadData } from './../../Redux/Actions/Actions';
import NotesComponent from './NotesComponent';

class Notes extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <View>
        <NotesComponent notes={this.props.notes}/>
      </View>
    );
  }
}

const mapStateToProps = function(state) {
  return state;
}

export default connect(mapStateToProps, { loadData })(Notes);