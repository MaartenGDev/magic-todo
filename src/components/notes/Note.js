import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

const Note = ({title, body}) => {
    return (
       <Paper>
           <h1>{title}</h1>
           <p>{body}</p>
       </Paper>
    );
};

Note.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default Note;