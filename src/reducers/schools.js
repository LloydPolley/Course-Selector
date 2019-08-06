
const schoolsReducerDefaultState = []

const schoolsReducer = ( state = schoolsReducerDefaultState, action ) => {
    switch(action.type){
        case 'ADD_SCHOOL':
            return [
                ...state,
                action.school
            ]
        case 'REMOVE_SCHOOL':
            return state.filter((school) => {
                return school.id !== action.school;
            } );
        case 'SET_SCHOOLS':
                return action.schools
        default:
            return state;
    } 
}

export default schoolsReducer;