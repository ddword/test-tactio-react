import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { updateFormPatient, newPatient } from './../../store/actions'

const classes = makeStyles((theme) => ({
    root: {
      '&': {
        margin: 'theme.spacing(1)',
        width: '45ch',
      }
    },
}));

const AddPatient = ({ patient, conditions, handleChange, handleSubmit }) => (
    <section className="addForm" style={{marginBottom: "50px"}}>
        
        <Paper className="table-card" style={{width: "700px", margin: "auto"}}>
            <h3> New patient: </h3>
            <form className={classes.root} 
                onSubmit={() => handleSubmit( {...patient} )}
                noValidate 
                autoComplete="off" 
                style={{padding: '15px', textAlign: 'left', justifyContent: "left"}}>
                <div>
                    <TextField 
                        error
                        name="patientId" 
                        type="number"
                        label="Patient ID" 
                        placeholder="id"
                        helperText="Should be a number"
                        required
                    />
                    <TextField
                        multiline
                        rowsMax={2}
                        name="firstName"
                        label="First name"
                        placeholder="John"
                        value={patient.firstName}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        multiline
                        rowsMax={1}
                        name="lastName"
                        label="Last name"
                        placeholder="Doe"
                        value={patient.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <TextField  
                        name="mobilePhone"
                        label="Phone"
                        placeholder="514 345 6789"
                        value={patient.mobilePhone}
                        onChange={handleChange}
                    />
                    <TextField
                        multiline
                        rowsMax={2}
                        name="city"
                        label="City"
                        placeholder="San-Fracisco"
                        value={patient.city}
                        onChange={handleChange}
                    />
                    <TextField
                        multiline
                        rowsMax={4}
                        name="streetAddress"
                        label="Address"
                        placeholder="123 1-Avenue St"
                        value={patient.streetAddress}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField  
                        multiline
                        rowsMax={2}
                        name="state"
                        label="State"
                        placeholder="California"
                        value={patient.state}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="postalCode"
                        label="Postal code"
                        placeholder="95113"
                        helperText="Obligate entry"
                        value={patient.postalCode}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        select
                        name="conditionId"
                        label="Condition"
                        value={patient.conditionId}
                        onChange={handleChange}
                        variant="filled"
                    >
                        {conditions.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <TextField
                        name="airStatus"
                        label="Air status"
                        placeholder="medium"
                        value={patient.airStatus}
                        onChange={handleChange}
                    />
                </div>
                <div>
                <Button
                    onClick={() => handleSubmit( {...patient} )}
                    variant="contained"
                    color="primary">
                    Add
                </Button>
                </div>
            </form>
        </Paper>
    </section>
)

const mapStateToProps = state => ({
    patient: state.patient,
    conditions: state.conditions
})

const mapDispatchToProps = dispatch => ({
    handleChange: event => dispatch(updateFormPatient(event.target.name, event.target.value)),
    handleSubmit: patient => dispatch(newPatient(patient))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient)
