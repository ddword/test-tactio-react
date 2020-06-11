import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import SearchForm from './SearchForm';
import Patient from './../profilePatient/Patient';
import TablePagination from '@material-ui/core/TablePagination';
import PropTypes from 'prop-types';


class TablePatients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            rows: this.commonRows
        }

        this.onSearch = this.onSearch.bind(this);

        this.useStyles = makeStyles({
            table: {
                minWidth: 650,
            },
        });
    }

    commonRows = [
        this.createData(
            1, 'Anna', 'Smith', '514 123 4567', 'San Diego', '123 1-st Avenue', 'California', '92365',
            {
                "id" : 2,
                "name" : "Crohn's Disease",
                "description" : "a chronic inflammatory disease of the intestines"
            },
            "high"
        ),
        this.createData(
            2, 'Bob', 'Dylan', '514 123 6457', 'Las Vegas', '2000 S Las Vegas Blvd', 'Nevada', '89104',
            {
                "id": 17,
                "name": "Rheumatoid Arthritis",
                "description": "Rheumatoid arthritis is an autoimmune disease that causes chronic inflammation of the joints, the tissue around the joints, as well as other organs in the body."
            },
            "low"
        ),
        this.createData(
            3, 'Susanna', 'Hoff', '514 346 5678', 'San Jose', '201 S Market St', 'California', '95113',
            {
                "id": 54,
                "name": "Menopause",
                "description": "Menopause is the time in a woman's life when menstrual periods permanently stop."
            },
            "medium"
        ),
        this.createData(
            4, 'Mark', 'Avrelij', '514 264 8909', 'Eureka', '815 W Wabash Ave', 'California', '95501',
            {
                "id": 6,
                "name": "Scoliosis",
                "description": "Scoliosis is an abnormal curve in the spine."
            },
            "low"
        )
    ];

    createData(id, firstName, lastName, mobilePhone, city, streetAddress, state, postalCode, conditions, airStatus) {
        return {id, firstName, lastName, mobilePhone, city, streetAddress, state, postalCode, conditions, airStatus};
    };

    onSearch(id) {
        // get rows from common state
        this.state.rows = this.commonRows;
        console.log("SearchForm", parseFloat(id));
        if (parseFloat(id/1) >= 0) {
            const nRows = this.state.rows.find(row => row.id === parseFloat(id));
            nRows ? this.setState({ id, rows: [nRows] }) : this.setState({ id, rows: this.commonRows });
        }
    }
    
    render() {
        const classes = this.useStyles;
        const {id, rows} = this.state;

        return (
            <section className="Patients List" style={{paddingBottom: "25px"}}>
                <SearchForm onChange={this.onSearch}></SearchForm>
                <TableContainer component={Paper} style={{width: "1000px", margin: "auto"}}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="left">First name</TableCell>
                                <TableCell align="left">Last name</TableCell>
                                <TableCell align="left">Mobile phone</TableCell>
                                <TableCell align="left">City</TableCell>
                                <TableCell align="left">Address</TableCell>
                                <TableCell align="left">State</TableCell>
                                <TableCell align="left">Postal code</TableCell>
                                <TableCell align="left">Diagnosis</TableCell>
                                <TableCell align="left">Air status</TableCell>
                                <TableCell align="left">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.length > 0 ? rows.map(row => (
                                <Patient row={row} key={row.id}></Patient>
                            )) : null}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        )
    }
}
export default TablePatients