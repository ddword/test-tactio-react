import React from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { fillUpdateForm, resetForm, deletePatient, openDialog, getAirStatus, setAirStatus } from './../../store/actions';

const colorMap = {
    'high': 'red',
    'medium': 'orange',
    'low': 'green'
};

const Patient = ({ patient, conditions, open, onClickUpdate, onRemove, handleAirStatus }) => {
    const { id, firstName, lastName, mobilePhone, city, streetAddress, conditionId, state, postalCode, airStatus } = patient;
    const condition = conditions.find(c => c.id === conditionId);

    if (!airStatus) {
        handleAirStatus(patient);
    }

    return (
        <TableRow key={id} className="Patient">
            <TableCell component="th" scope="row">{id}</TableCell>
            <TableCell align="left">{firstName}</TableCell>
            <TableCell align="left">{lastName}</TableCell>
            <TableCell align="left">{mobilePhone}</TableCell>
            <TableCell align="left">{city}</TableCell>
            <TableCell align="left">{streetAddress}</TableCell>
            <TableCell align="left">{state}</TableCell>
            <TableCell align="left">{postalCode}</TableCell>
            <TableCell align="left">{condition.name}</TableCell>
            <TableCell align="left" style={colorMap[airStatus] ? {color: colorMap[airStatus]} : {}}>{airStatus}</TableCell>
            <TableCell align="left">
                <div style={{display: 'flex', justifyItems: "center"}}>
                    <IconButton aria-label="edit" color="primary" onClick={() => onClickUpdate(patient)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => onRemove(patient.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </TableCell>
        </TableRow>
    )
}

const mapStateToProps = state => {

    return {
        conditions: state.conditions
    }
}

const mapDispatchToProps = dispatch => ({
    onRemove: (id) => {
        dispatch(deletePatient(id));
    },
    onClickUpdate: (patient) => {
        dispatch(fillUpdateForm(patient));
        dispatch(openDialog());
    },
    handleAirStatus: (patient) => {
        dispatch(setAirStatus(patient.id, 'Loading...'));
        dispatch(getAirStatus(patient));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Patient)
