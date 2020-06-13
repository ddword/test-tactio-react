export const openDialog = () => ({
    type: 'openDialog',
})

export const closeDialog = () => ({
    type: 'closeDialog',
})

export const newPatient = (patient) => ({
    type: 'newPatient',
    patient
})

export const editPatient = (patient) => ({
   type: 'editPatient',
   patient
})

export const fillUpdateForm = (patient) => ({
    type: 'fillUpdateForm',
    patient
})

export const resetForm = () => ({
    type: 'resetForm'
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

