import { combineReducers } from 'redux'

const patient = (state = {
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
}, action) => {
    switch (action.type) {
        case 'updateFormPatient':
            return {
                ...state,
                [action.name]: action.value
            }
        default:
            return state
    }
}

const patients = (state = [], action) => {
    switch (action.type) {
        case 'newPatient':
            // ID generation
            action.patient.id = state.length;

            return [
                ...state,
                action.patient
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
    patient,
    patients,
    searchId,
    conditions
})