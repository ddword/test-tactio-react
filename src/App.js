import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'

import logo from './logo.svg';
import './App.css';
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import TablePatients from './components/listOfPatients/TablePatients';
import AddPatient from './components/form/AddPatient';


class App extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <section className="App">
            <TablePatients></TablePatients>
            <AddPatient></AddPatient>
          </section>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
