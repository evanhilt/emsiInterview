import React, { Component } from 'react';
// import './App.css';

class SchoolComponent extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: this.props.schoolName,
        location: this.props.location
    };
  }

  render() {
    return(
      <div>
        <p>
          Hello Components
        </p>
        <p>
          The School's name is: {this.props.name}
        </p>
      </div>
    );
  }
}

  export default SchoolComponent;