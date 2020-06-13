import { combineReducers } from 'redux';

const init = {
    id: null,
    firstName: '',
    lastName: '',
    mobilePhone: '',
    city: '',
    streetAddress: '',
    state: '',
    postalCode: '',
    conditionId: null,
    airStatus: ''
};

const open = (state = false, action) => {
    switch (action.type) {
        case 'openDialog':
            return true;

        case 'closeDialog':
            return false;

        default:
            return state
    }
}

const patient = (state = init, action) => {
    switch (action.type) {
        case 'updateFormPatient':
            return {
                ...state,
                [action.name]: action.value
            }
        case 'fillUpdateForm':
            return action.patient

        case 'resetForm':
            return init;
            
        default:
            return state
    }
}

const listPatients = [
    {
        airStatus: "",
        city: "San Francisco",
        conditionId: 1,
        firstName: "John",
        id: 0,
        lastName: "Abbot",
        mobilePhone: "987123454",
        postalCode: "45732",
        state: "California",
        streetAddress: "1324 Fider"
    },
    {
        id: 1,
        firstName: 'Anna',
        lastName: 'Silver',
        mobilePhone: '514 123 3455',
        city: 'San Diego',
        streetAddress: '123 1-st Avenue',
        state: 'California',
        postalCode: '92365',
        conditionId: 17,
        airStatus: ''
    },
    {
        id: 2,
        firstName: 'Bob',
        lastName: 'Dylan',
        mobilePhone: '514 123 6457',
        city: 'Las Vegas',
        streetAddress: '2000 S Las Vegas Blvd',
        state: 'Nevada',
        postalCode: '89104',
        conditionId: 6,
        airStatus: ''
    },
    {
        id: 3,
        firstName: 'Rita',
        lastName: 'Miller',
        mobilePhone: '514 173 2345',
        city: 'Eureka',
        streetAddress: '815 W Wabash Ave',
        state: 'California',
        postalCode: '95501',
        conditionId: 54,
        airStatus: ''
    },
    {
        id: 4,
        firstName: 'Mark',
        lastName: 'Avrelij',
        mobilePhone: '514 103 2945',
        city: 'Eureka',
        streetAddress: '818 W Wabash Ave',
        state: 'California',
        postalCode: '95503',
        conditionId: 1,
        airStatus: ''
    }
];

const patients = (state = listPatients, action) => {
    switch (action.type) {
        case 'newPatient':
            // ID generation
            action.patient.id = state.length;
            // console.log("patients", state);
            return [
                ...state,
                action.patient
            ]

        case 'editPatient':
            const i = state.findIndex(p => p.id === action.patient.id);
            return [
                ...state.slice(0, i),
                action.patient,
                ...state.slice(i + 1, state.length)
            ]
  
        default:
            return state
    }
}

const searchId = (state = null, action) => {
    switch (action.type) {
        case 'updateSearchId':
            console.log('action.searchId ::::   = = == ' + action.searchId)
            return action.searchId

        default:
            return state
    }
}

const conditions = (state = [
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
], action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    open,
    patient,
    patients,
    searchId,
    conditions
})