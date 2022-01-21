import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './PostList';
import PostEdit from './PostEdit';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/posts' exact={true} component={PostList}/>
          <Route path='/posts/:id' component={PostEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;