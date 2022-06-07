import React, { Component } from 'react';
import Nav from './components/layout/Nav';

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/list-student.component'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Main from './components/Main';
import CreateSalaire from './components/create-salaire.component';
import SalaireList from './components/list-salaire.component';
import CreateConge from './components/create-conge.component';
import CongeList from './components/list-conge.component';
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
                                  <Route
                                      exact
                                      path="/create-salaire"
                                      component={(props) => <CreateSalaire {...props}  />}
                                    />
                  <Route
                      exact
                      path="/list-salaire"
                      component={(props) => <SalaireList {...props}  />}
                    />
                    <Route
                        exact
                        path="/create-conge"
                        component={(props) => <CreateConge {...props}  />}
                      />
                    <Route
                        exact
                        path="/list-conge"
                        component={(props) => <CongeList {...props}  />}
                      />
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;