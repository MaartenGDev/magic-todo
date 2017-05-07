import React from 'react';
import {connect} from 'react-redux';
import {addNote} from './../../actions/index';

let AddNote = ({dispatch}) => {
    let input;

    return (
        <section>
            <form onSubmit={e => {
                e.preventDefault();

                if (!input.value.trim()) {
                    return;
                }

                dispatch(addNote(input.value));
                input.value = '';
            }}>

                <input ref={node => {
                    input = node
                }}/>

                <button type="submit">
                    Add Todo
                </button>
            </form>
        </section>
    );
};

AddNote = connect()(AddNote);

export default AddNote;