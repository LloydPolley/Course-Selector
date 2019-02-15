

export const setTextFilter = (search) => ({
    type: 'SET_TEXT_FILTER',
    search
});

export const sortByLanguage = () => ({
    type: 'SORT_BY_LANGUAGE',
    sortBy: 'language'
});

export const sortBySchool = () => ({
    type: 'SORT_BY_SCHOOL',
    sortBy: 'school'
});

export const sortByCourseName = () => ({
    type: 'SORT_BY_COURSENAME',
    sortBy: 'courseName'
});


