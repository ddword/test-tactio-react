import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import { Link } from 'react-router-dom'

function Patient(props) {
    const {id, firstName, lastName, mobilePhone, city, streetAddress, state, postalCode, conditions, airStatus} = props.row;
    console.log("ROW", props);

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
            <TableCell align="left">{conditions.id} {conditions.name}
            </TableCell>
            <TableCell align="left">{airStatus}</TableCell>
            <TableCell align="left">icons</TableCell>
        </TableRow>
    )

}

export default Patient