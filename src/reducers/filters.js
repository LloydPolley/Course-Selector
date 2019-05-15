const filtersDefaultState = {
    text: "",
    sortBy: "language"
};

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_LANGUAGE':
      return {
        ...state,
        sortBy: 'language'
      }
    case 'SORT_BY_SCHOOL':
      return {
        ...state,
        sortBy: 'school'
      }
    case 'SORT_BY_COURSENAME':
      return {
        ...state,
        sortBy: 'courseName'
      }
    default:
      return state;
  }
};

export default filtersReducer;
