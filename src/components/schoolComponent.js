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
      <div className="schoolComponent">
        <div className="schoolComponentTopHalf">
          <img src="./assets/university.svg" alt="" width="100" height="100"/>
          <div>
            <p>{this.state.name}</p>
            <p>{this.state.location}</p>
            <p>{this.state.studentSize}, {this.state.admissionRate}</p>
          </div>
        </div>
        <hr></hr>
        <p>Available Program Counts:</p>
        <div>{this.state.programs}</div>
      </div>
    );
  }
}