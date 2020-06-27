import axios from 'axios';

export const getList = () => dispatch => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        dispatch({ type: "ADD_TO_LIST", payload: response.data})
    })
    .catch(error => console.log(error))
}

export const addList = (newObject) => dispatch => {
    axios.post('http://localhost:3333/smurfs', newObject)
    .then(response => {
        console.log(response)
        dispatch({ type: "ADD_PERSON", payload: newObject})
    })
    .catch(error => console.log(error))
}