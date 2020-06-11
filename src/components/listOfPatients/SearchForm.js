import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super()
    this.inputID = null
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.inputID.focus()
  }

  onChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <section className="SearchForm">
        <div className="row" style={{display: "flex", justifyContent: "center", textAlign: "center", paddingTop: "50px", paddingBottom: "15px"}}>
         <span style={{lineHeight: "2.1876em", paddingRight: "20px"}}>Get patient by ID</span>
          <TextField
            name="name"
            autoComplete="off"
            placeholder="enter patient ID"
            ref={input => this.inputID = input}
            onChange={this.onChange.bind(this)}
          />
        </div> 
      </section>
    )

  }

}

export default SearchForm