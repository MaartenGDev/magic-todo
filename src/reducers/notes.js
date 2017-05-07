const notes = (state = [], action) => {
    switch(action.type){
        case 'ADD_NOTE':
            return {
                title: action.title,
                body: action.body
            };
        default:
            return state;
    }
};

export default notes;