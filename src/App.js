import React, { Component } from 'react';
import SchoolComponent from './components/schoolComponent';
import getSchools from './data/getSchools';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schools: [],
      schoolId: ""
    }
  }

  componentDidMount() {
    const url = getSchools();

    fetch(url)
      .then((response) => {
      return response.json();
      })
      .then((json) => {
        this.setState({
          schools: json.results,
          schoolId: json.results[0].id
        });
        console.log(this.state.schools[0].id);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{this.state.schoolId}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <SchoolComponent
            name='The best school'
            location='wherever'
          />
        </header>
      </div>
    );
  }
}

export default App;
