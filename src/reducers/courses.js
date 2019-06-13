const coursesReducerDefaultState = []
const coursesReducer = ( state = coursesReducerDefaultState, action ) => {
    switch(action.type){
        case 'ADD_COURSE':
            return [
                ...state,
                action.course
            ]
        case 'SET_COURSES':
            return action.courses
        case 'REMOVE_COURSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            } );
        case 'EDIT_COURSE':
            return state.map((course)=>{
                if(course.id === action.id){
                    return {
                        ...course,
                        ...action.updates
                    }
                } else{
                    return course;
                }
            })
        default:
            return state;
    } 
}

export default coursesReducer;