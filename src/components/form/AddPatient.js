import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { updateFormPatient, newPatient, editPatient, resetForm, openDialog, closeDialog, updateSearchId, getAirStatus, setPage } from '../../store/actions';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddPatient = ({ formPatient, conditions, open, handleShowModal, handleCloseModal, handleChange, handleSubmit, handleUpdate }) => {
    const classes = useStyles();
    const isUpdateMode = formPatient.id !== null;
    let inputFirstName, inputLastName, inputPostalCode, conditionIdSelect;

    const formValidation = () => {
        if (formPatient.firstName === '') {
            inputFirstName.focus();
            return;
        }

        if (formPatient.lastName === '') {
            inputLastName.focus();
            return;
        }

        if (formPatient.postalCode === '') {
            inputPostalCode.focus();
            return;
        }

        if (formPatient.conditionId === null) {
            conditionIdSelect.focus();
            return;
        }

        isUpdateMode ? handleUpdate({ ...formPatient }) : handleSubmit({ ...formPatient });
    }

    return (
        <section className="addPatient" style={{ marginBottom: "50px" }}>
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
                <DialogTitle id="simple-dialog-title">{isUpdateMode ? (`Edit patient`) : (`New patient`)}</DialogTitle>
                <DialogContent>
                    <form
                        onSubmit={() => isUpdateMode ? handleUpdate({ ...formPatient }) : handleSubmit({ ...formPatient })}
                        autoComplete="off"
                        className={classes.root}
                    >
                        <div>
                            <Input
                                name="patientId"
                                value={formPatient.id}
                                type="hidden"
                            />
                            <TextField
                                name="firstName"
                                label="First name"
                                placeholder="John"
                                value={formPatient.firstName}
                                onChange={handleChange}
                                required
                                inputRef={input => inputFirstName = input}
                            />
                            <TextField
                                name="lastName"
                                label="Last name"
                                placeholder="Doe"
                                value={formPatient.lastName}
                                onChange={handleChange}
                                required
                                inputRef={input => inputLastName = input}
                            />
                        </div>
                        <div>
                            <TextField
                                name="mobilePhone"
                                label="Phone"
                                placeholder="514 345 6789"
                                value={formPatient.mobilePhone}
                                onChange={handleChange}
                            />
                            <TextField
                                name="city"
                                label="City"
                                placeholder="San-Fracisco"
                                value={formPatient.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                name="streetAddress"
                                label="Address"
                                placeholder="123 1-Avenue St"
                                value={formPatient.streetAddress}
                                onChange={handleChange}
                            />
                            <TextField
                                name="state"
                                label="State"
                                placeholder="California"
                                value={formPatient.state}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                name="postalCode"
                                label="Postal code"
                                placeholder="95113"
                                value={formPatient.postalCode}
                                onChange={handleChange}
                                inputRef={input => inputPostalCode = input}
                            />

                            <TextField
                                required
                                select
                                name="conditionId"
                                label="Condition"
                                value={formPatient.conditionId}
                                onChange={handleChange}
                                variant="filled"
                                inputRef={input => conditionIdSelect = input}>
                                {conditions.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </form>
                    <DialogActions>
                        <Button
                            onClick={formValidation}
                            variant="contained"
                            color="primary">
                            {isUpdateMode ? (`Update`) : (`Add`)}
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>

        </section>
    )
}

const mapStateToProps = state => ({
    formPatient: state.formPatient,
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
        dispatch(setPage(0));
        dispatch(closeDialog());
        dispatch(resetForm());
    },
    handleUpdate: patient => {
        dispatch(editPatient(patient));
        dispatch(getAirStatus(patient));
        dispatch(closeDialog());
        dispatch(resetForm());
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient)
