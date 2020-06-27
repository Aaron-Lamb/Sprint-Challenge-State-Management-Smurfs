import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions/index';

const AddForm = ({ addList, list }) => {
    return(
        <form>

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