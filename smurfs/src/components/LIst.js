import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getList } from '../actions/index';

const List = ({ getList, list }) => {
    useEffect(() => {
        getList();
    }, [getList])

    return(
        <div>
            {list.map(person => {
                return(
                    <div>
                        <h4>{person.name}</h4>
                        <h5>{person.age}</h5>
                        <h6>{person.height}</h6>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        list: state.list
    }
}

export default connect(
    mapStateToProps,
    { getList }
)(List);