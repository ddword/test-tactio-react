import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { updateFormPatient, newPatient, editPatient, resetForm, openDialog, closeDialog, updateSearchId } from './../../store/actions'

const classes = makeStyles((theme) => ({
    root: {
        '&': {
            margin: 'theme.spacing(1)',
            width: '45ch',
        }
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
  

const AddPatient = ({ patient, conditions, open, handleShowModal, handleCloseModal, handleChange, handleSubmit, handleUpdate }) => {

    const isUpdateMode = patient.id !== null;
    
    console.log('isUpdateMode : ' + isUpdateMode);

    return (
        <section className="addForm" style={{ marginBottom: "50px" }}>
                <Button 
                    className="dModal"
                    variant="outlined"
                    color="primary" 
                    onClick={handleShowModal}
                    >
                        Add new patient
                </Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseModal}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    >
                    <DialogActions>
                        <IconButton onClick={handleCloseModal} color="primary">
                            <CloseIcon />
                        </IconButton>
                    </DialogActions>
                    <DialogContent>
                        <h3> New patient: </h3>
                        <form className={classes.root}
                            onSubmit={() => isUpdateMode ? handleUpdate({ ...patient }) : handleSubmit({...patient })}
                            noValidate
                            autoComplete="off"
                            style={{ padding: '15px', textAlign: 'left', justifyContent: "left" }}>
                            <div>
                                <Input
                                    name="patientId"
                                    value={patient.id}
                                    type="hidden"
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
                                    type="postal"
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
                                    onClick={() => isUpdateMode ? handleUpdate({ ...patient }) : handleSubmit({...patient })}
                                    variant="contained"
                                    color="primary">
                                    Add
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            
        </section>
    )
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    onmousemoveAction: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}
*/


const mapStateToProps = state => ({
    patient: state.patient,
    conditions: state.conditions,
    open: state.open   
})

const mapDispatchToProps = dispatch => ({
    handleChange: event => dispatch(updateFormPatient(event.target.name, event.target.value)),
    handleCloseModal: () => {
        dispatch(closeDialog());
        dispatch(resetForm());
    },
    handleShowModal: () => dispatch(openDialog()),
    handleSubmit: patient => {
        dispatch(newPatient(patient));
        dispatch(updateSearchId(null));
        dispatch(closeDialog());
        dispatch(resetForm());
    },
    handleUpdate: patient => {
        dispatch(editPatient(patient));
        dispatch(closeDialog());
        dispatch(resetForm());
    },
    
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient)
