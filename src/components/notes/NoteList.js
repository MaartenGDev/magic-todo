import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

const NoteList = ({notes, onNoteClick}) => {
    return (
        <section>
            {
                notes.map(note => {
                    <Note
                        key={note.id}
                        {...note}
                        onClick={() => onNoteClick(note.id)}
                    />
                })
            }
        </section>
    );
};

NoteList.propTypes = {
    // myProp: PropTypes.string.isRequired
};

export default NoteList;