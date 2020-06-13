import React from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { fillUpdateForm, resetForm, openDialog } from './../../store/actions'


const Patient = ({ patient, conditions, open, onClickUpdate, onRemove }) => {
    const { id, firstName, lastName, mobilePhone, city, streetAddress, conditionId, state, postalCode, airStatus } = patient;
    const condition = conditions.find(c => c.id === conditionId);

    return (
        <TableRow key={id} className="Patient">
            <TableCell component="th" scope="row">
                {id}
            </TableCell>
            <TableCell align="left">{firstName}</TableCell>
            <TableCell align="left">{lastName}</TableCell>
            <TableCell align="left">{mobilePhone}</TableCell>
            <TableCell align="left">{city}</TableCell>
            <TableCell align="left">{streetAddress}</TableCell>
            <TableCell align="left">{state}</TableCell>
            <TableCell align="left">{postalCode}</TableCell>
            <TableCell align="left">{condition.id} {condition.name}</TableCell>
            <TableCell align="left">{airStatus}</TableCell>
            <TableCell align="left">
                <div style={{display: 'flex', justifyItems: "center"}}>
                    <IconButton aria-label="edit" color="primary" onClick={() => onClickUpdate(patient)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={onRemove}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </TableCell>
        </TableRow>
    )
}

const mapStateToProps = state => {
    console.log("Patient what we have", state);

    return {
        conditions: state.conditions
    }
}

const mapDispatchToProps = dispatch => ({
    onRemove: () => dispatch(resetForm()),
    onClickUpdate: (patient) => {
        dispatch(fillUpdateForm(patient));
        dispatch(openDialog());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Patient)
