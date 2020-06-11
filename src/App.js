import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import TablePatients from './components/listOfPatients/TablePatients';
// import OnePatient from './components/displayOnePatient/OnePatient';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import AddPatient from './components/addForm/AddPatient';

class App extends Component {
  constructor(props) {
    super()

    /*this.state = {
      id: ''
    }*/
  }

  /*onSearch(id) {
    this.setState({id: id})
  }*/

  render() {
    return (
      <ThemeProvider theme={theme}>
        <section className="App">
          <TablePatients></TablePatients>
          <AddPatient></AddPatient>
        </section>
      </ThemeProvider>
    );
  }
}

export default App;
