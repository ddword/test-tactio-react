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

export const deletePatient = (id) => ({
    type: 'deletePatient',
    id
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

export const getAirStatus = (patient) => (dispatch, getState) => {
    return fetch(`https://open.propellerhealth.com/prod/forecast?postalCode=${patient.postalCode}`, {
    	method: 'GET'
    }).then(res => res.json()).then(data => {
        dispatch(setAirStatus(patient.id, data.properties.code))
    }).catch(err => {
        dispatch(setAirStatus(patient.id, 'error'))
    })
}

export const setAirStatus = (id, value) => ({
    type: 'setAirStatus',
    id,
    value
})

export const updateFormPatient = (name, value) => ({
    type: 'updateFormPatient',
    name,
    value
})

export const setPage = (page) => ({
    type: 'setPage',
    page
})


