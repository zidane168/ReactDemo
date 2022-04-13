export const SET_JOB = "set_Job"
export const ADD_JOB = "add_Job"
export const DELETE_JOB = "delete_Job"

export const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}

export const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}

