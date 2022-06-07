import React, { Component } from 'react';
import Nav from './components/layout/Nav';

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/list-student.component'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Main from './components/Main';
class App extends Component {
  render() {
    return (
      <Router>
        
        <Nav/>
        <div>
          <switch>
          <Route exact path='/' component={Main} />
          <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                  <Route
                            exact
                            path="/create-student"
                            component={(props) => <CreateStudent  />}
                          />
                          <Route
                                    exact
                                    path="/edit-student/:id"
                                    component={(props) => <EditStudent {...props}  />}
                                  />
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;