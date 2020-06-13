import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import { setPage } from './../../store/actions';

const ROWS_PER_PAGE = 3;

const TablePatients = ({ patients, page, count, handleChangePage }) => {
    if (patients.length === 0 && page !== 0) {
        handleChangePage(undefined, --page);
    }

    return (
        <section className="Patients List" style={{paddingBottom: "25px"}}>
            <h3>Patients List</h3>
            <SearchForm />
            { patients.length === 0 ? <b>Patients not found</b> :
                <div style={{width: "1200px", margin: "auto"}}>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
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
                    <TablePagination
                        rowsPerPageOptions={[]}
                        component="div"
                        count={count}
                        rowsPerPage={ROWS_PER_PAGE}
                        page={page}
                        onChangePage={handleChangePage}
                    />
                </div>
            }
    
        </section>
    );
}

const mapStateToProps = state => {
    const { patients, searchId } = state;
    const start = state.page * ROWS_PER_PAGE;
    const end = start + ROWS_PER_PAGE;

    const filteredPatients = searchId !== null ? patients.filter(p => p.id === searchId) : patients;
    const paginatedPatients = filteredPatients.slice(start, end);

    return {
        patients: paginatedPatients,
        page: state.page,
        count: filteredPatients.length
    };
};

const mapDispatchToProps = dispatch => ({
    handleChangePage: (event, newPage) => {
        dispatch(setPage(newPage));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TablePatients)