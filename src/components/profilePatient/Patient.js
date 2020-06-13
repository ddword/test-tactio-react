import React from 'react';
import { connect } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { } from './../../store/actions'


const Patient = ({ patient, conditions, onClickUpdate }) => {
    const { id, firstName, lastName, mobilePhone, city, streetAddress, conditionId, state, postalCode, airStatus } = patient;
    const condition = conditions.find(c => c.id === conditionId)

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
            <TableCell align="left">icons</TableCell>
        </TableRow>
    )
}

const mapStateToProps = state => ({
    conditions: state.conditions
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Patient)
