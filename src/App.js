import React, { Component } from 'react';
import SchoolComponent from './components/schoolComponent';
import getSchoolsUrl from './data/url';
import { getCredCount, makeCredentialMap } from './data/credentials';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schoolComponents: [],
    }
  }

  createSchoolComponents = (schoolObjects) => {
    return <div>{schoolObjects.map(schoolObject => this.createSchoolComponent(schoolObject))}</div>;
  }

  createSchoolComponent = (schoolObject) => {
    const { 'school.name': name } = schoolObject;
    const { 'school.city': city } = schoolObject;
    const { 'school.state': state } = schoolObject;
    const { 'latest.student.size': studentSize } = schoolObject;
    const { 'latest.admissions.admission_rate.overall': admissionRate } = schoolObject;

    const { 'latest.programs.cip_4_digit': programObjects } = schoolObject;
    var i;
    var credentialMap = makeCredentialMap();
    for(i=0; i<programObjects.length; i++) {
      const { 'credential': { title } } = programObjects[i];
      credentialMap[title] += 1;
    }
    console.log(credentialMap);
    var programs = [];
    for(var credential in credentialMap) {
      if(credentialMap[credential] !== 0) {
        programs.push(`${credential}: ${credentialMap[credential]}\n`);
      }
    }
    const schoolComponent = (<SchoolComponent 
      name = { name }
      location = { `${city}, ${state}` }
      studentSize = { studentSize }
      admissionRate = { admissionRate }
      programs = { programs }
    />);
    return schoolComponent;
  }

  componentDidMount() {
    const url = getSchoolsUrl();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json.results);
        this.setState({
          schoolComponents: this.createSchoolComponents(json.results)
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>{this.state.schoolComponents}</div>
        </header>
      </div>
    );
  }
}

export default App;
