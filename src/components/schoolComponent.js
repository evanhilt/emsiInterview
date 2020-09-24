import React, { Component } from 'react';
// import './App.css';

export default class SchoolComponent extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: this.props.name,
        location: this.props.location,
        studentSize: this.props.studentSize,
        admissionRate: this.props.admissionRate,
        programs: this.props.programs   
    };
  }

  render() {
    return(
      <div className='schoolComponent'>
        <p>{this.state.name}</p>
        <p>{this.state.location}</p>
        <p>{this.state.studentSize}, {this.state.admissionRate}</p>
        <p>Available Program Counts:</p>
        <div>{this.state.programs}</div>
      </div>
    );
  }
}