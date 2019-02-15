const filtersDefaultState = {
    text: "",
    sortBy: "language"
};

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.search
      }
    case 'SORT_BY_LANGUAGE':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SORT_BY_SCHOOL':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SORT_BY_COURSENAME':
      return {
        ...state,
        sortBy: action.sortBy
      }
    default:
      return state;
  }
};

export default filtersReducer;
