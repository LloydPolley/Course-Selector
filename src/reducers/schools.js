
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
                return school !== action.school;
            } );
        case 'SET_COURSES':
                return action.courses
        default:
            return state;
    } 
}

export default schoolsReducer;