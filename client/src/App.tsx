import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/commons/header/Header';
import Detail from './components/detail/Detail';
import Home from './components/home/Home';
import Search from './components/search/Search';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/items' exact component={Search}/>
            <Route path='/items/:id' exact component={Detail}/>
          </Switch>
        </BrowserRouter>
    );
  }
} 