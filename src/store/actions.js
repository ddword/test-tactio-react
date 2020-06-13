export const newPatient = (patient) => ({
    type: 'newPatient',
    patient
})

export const updateSearchId = (searchId) => ({
    type: 'updateSearchId',
    searchId
})

export const updateFormPatient = (name, value) => ({
    type: 'updateFormPatient',
    name,
    value
})

