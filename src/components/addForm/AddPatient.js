import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const conditions = [
    {
        id: 1,
        name: "Crohn's Disease",
    },
    {
        id: 6,
        name: "Scoliosis",
    },
    {
        id: 17,
        name: "Rheumatoid Arthritis",
    },
    {
        id: 54,
        name: "Menopause",
    },
];

class AddPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            firstName: 'A',
            lastName: 'B',
            mobilePhone: '',
            city: '',
            streetAddress: '',
            state: '',
            postalCode: '',
            condition: '',
            airStatus: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*
    static propTypes = {
        onChange: PropTypes.func.isRequired,
    }
    */

    useStyles = makeStyles((theme) => ({
        root: {
          '&': {
            margin: 'theme.spacing(1)',
            width: '45ch',
          }
        },
    }));

    handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        console.log('handleChange', event.target.value, event.target.name);
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { id, firstName, lastName, mobilePhone, city, streetAddress, state, postalCode, condition, airStatus } = this.state;
        console.log('handleSubmit', this.state);
    }

    render() {
        const classes = this.useStyles;
        return (
            <section className="addForm" style={{marginBottom: "50px"}}>
                <Paper className="table-card" style={{width: "700px", margin: "auto"}}>
                    <h3> New patient: </h3>
                    <form className={classes.root} 
                        onSubmit={this.handleSubmit}
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
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                required
                            />
                            <TextField
                                multiline
                                rowsMax={1}
                                name="lastName"
                                label="Last name"
                                placeholder="Doe"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <TextField  
                                name="mobilePhone"
                                label="Phone"
                                placeholder="514 345 6789"
                                value={this.state.mobilePhone}
                                onChange={this.handleChange}
                            />
                            <TextField
                                multiline
                                rowsMax={2}
                                name="city"
                                label="City"
                                placeholder="San-Fracisco"
                                value={this.state.city}
                                onChange={this.handleChange}
                            />
                            <TextField
                                multiline
                                rowsMax={4}
                                name="streetAddress"
                                label="Address"
                                placeholder="123 1-Avenue St"
                                value={this.state.streetAddress}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <TextField  
                                multiline
                                rowsMax={2}
                                name="state"
                                label="State"
                                placeholder="California"
                                value={this.state.state}
                                onChange={this.handleChange}
                            />
                            <TextField
                                required
                                name="postalCode"
                                label="Postal code"
                                placeholder="95113"
                                helperText="Obligate entry"
                                value={this.state.postalCode}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                select
                                name="condition"
                                label="Condition"
                                value={this.state.condition}
                                onChange={this.handleChange}
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
                                value={this.state.airStatus}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                        <Button
                            onClick={this.handleSubmit}
                            variant="contained"
                            color="primary">
                            Add
                        </Button>
                        </div>
                    </form>
                </Paper>
            </section>
        )
    }
}
export default AddPatient