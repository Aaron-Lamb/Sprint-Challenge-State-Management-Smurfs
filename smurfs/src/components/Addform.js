import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions/index';

const AddForm = ({ addList, list }) => {
    const [person, setPerson] = useState({
        name: '',
        age: '',
        height: '', 
        id: Date.now()
    })

    const handleChanges = event => {
        setPerson({
            ...person,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(person)
        addList(person);
        setPerson({
        name: '',
        age: '',
        height: '',
        id: Date.now()
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add Yourself!</h3>
            <label>
                Name: <input name='name' id='name' value={person.name} onChange={handleChanges} />
            </label>
            <label>
                Age: <input name='age' id='age' value={person.age} onChange={handleChanges} />
            </label>
            <label>
                Height: <input name='height' id='height' value={person.height} onChange={handleChanges} />
            </label>
            <button type='submit'>Add</button>
        </form>
    )
}

const mapStateToProps = state => {
    return{
        list: state.list
    }
}

export default connect(
    mapStateToProps,
    { addList }
)(AddForm);