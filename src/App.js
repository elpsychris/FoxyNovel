import React, {Component} from 'react';
import logo from './logo.svg';
import Header from './components/common/header.js'
import WidgetLatestPJ from './components/widgets/latestPJ.js'

import './App.css';

class App extends Component {
  render() {
    return ([ 
      < Header />, 
      <div className="container-fluid">
        <div className="row">
        {< WidgetLatestPJ />}{< WidgetLatestPJ />}{< WidgetLatestPJ />}
        </div>
      </div>
    ])
  }
}

export default App;
