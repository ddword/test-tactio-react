import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const classes = makeStyles({
    table: {
        minWidth: 650,
    },
});


const TablePatients = ({ patients }) => (
    <section className="Patients List" style={{paddingBottom: "25px"}}>
        <h3>Patients List</h3>
        <SearchForm />
        { patients.length === 0 ? <b>Patients not found</b> : 
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
                    { patients.map(patient => <Patient patient={patient} key={patient.id} />) }
                </TableBody>
            </Table>
        </TableContainer>
        }
    </section>
)
//state.patients /*
const mapStateToProps = state => {
    const { patients, searchId } = state
    return {
        patients: searchId !== null ? patients.filter(p => p.id === searchId) : patients
    }
}

export default connect(mapStateToProps, null)(TablePatients)