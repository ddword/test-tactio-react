import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { updateSearchId, setPage } from './../../store/actions';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.inputID = null
  }

  componentDidMount() {
    this.inputID.focus();
  }

  render() {
    const { searchId, onChange } = this.props;

    return (
      <section className="SearchForm">
        <div className="row" style={{display: "flex", justifyContent: "center", textAlign: "center", paddingTop: "50px", paddingBottom: "15px"}}>
         <span style={{lineHeight: "2.1876em", paddingRight: "20px"}}>Get patient by ID</span>
          <TextField
            name="name"
            value={searchId === null ? '' : searchId}
            autoComplete="off"
            placeholder="enter patient ID"
            ref={input => this.inputID = input}
            onChange={event => {
                const val = Number(event.target.value);
                onChange(event.target.value && !Number.isNaN(val) ? val : null);
            }}
          />
        </div> 
      </section>
    )
  }
};

const mapStateToProps = state => ({
  searchId: state.searchId
});

const mapDispatchToProps = dispatch => ({
  onChange: searchId => {
    dispatch(setPage(0));
    dispatch(updateSearchId(searchId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
