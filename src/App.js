import React, {Component} from 'react';
import logo from './logo.svg';
import Header from './components/common/header'
import Footer from './components/common/footer'
import WidgetLatestPJ from './components/widgets/latestPJ.js'
import './App.css';


class App extends Component {
  render() {
    return ([
      // <!-- Latest compiled and minified CSS -->
      < Header />, 
      <div className="container-fluid">
        <div className="row">
          {< WidgetLatestPJ />}
          {< WidgetLatestPJ />}
          {< WidgetLatestPJ />}
        </div>
      </div>,
      <Footer/>
    ])
  }
}

export default App;
