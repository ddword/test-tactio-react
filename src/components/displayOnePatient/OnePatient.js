import React, { Component } from 'react';
import SearchForm from '../listOfPatients/SearchForm';
import Patient from './../profilePatient/Patient';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';

class OnePatient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            rows: this.stateRows
        }

        this.onSearch = this.onSearch.bind(this);
    }

    stateRows = [
        this.createData(
            1, 'Anna', 'Smith', '514 123 4567', 'San Diego', '123 1-st Avenue', 'California', '92365',
            {
                "id" : 2,
                "name" : "Crohn's Disease",
                "description" : "a chronic inflammatory disease of the intestines"
            },
            "high"
        )
    ];

    createData(id, firstName, lastName, mobilePhone, city, streetAddress, state, postalCode, conditions, airStatus) {
        return {id, firstName, lastName, mobilePhone, city, streetAddress, state, postalCode, conditions, airStatus};
    };

    onSearch(id) {
        // get rows from common state
        this.state.rows = this.stateRows;
        console.log("SearchForm", id);
        const nRows = this.state.rows.find(row => row.id === parseFloat(id));
        nRows ? this.setState({ id, rows: [nRows] }) : this.setState({ id, rows: [] });
    }
    
    render() {
        const classes = this.useStyles;
        const {id, rows} = this.state;
        return (
            <section className="OnePatient">
                <SearchForm onChange={this.onSearch}></SearchForm>
                { (id !== '' && rows.length > 0) ? (
                    <TableContainer component={Paper} style={{width: "1000px", margin: "auto"}}>
                        <Table size="small" aria-label="a dense table">
                            <TableBody>
                                {rows.map((row) => (
                                    <Patient row={row} key={row.id}></Patient>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>    
                ) : null }
            </section>
        )
    }
}
export default OnePatient