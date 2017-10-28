import React, {Component} from 'react';
import logo from './logo.svg';
import Header from './components/common/header'
import Footer from './components/common/footer'
import Content from './components/common/content'

import './App.css';


class App extends Component {
  render() {
    return ([
      // <!-- Latest compiled and minified CSS -->
      < Header />, 
      < Content />,
      <Footer/>
    ])
  }
}

export default App;
