
import {setTextFilter,sortByLanguage,sortBySchool,sortByCourseName} from '../../actions/filters';


// test ('Returns object', ()=>{
//     expect(sortByLanguage()).toEqual();
// }); 


test ('Returns object', ()=>{
    expect(setTextFilter('hello')).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'hello'
    });
});

test ('Returns object', ()=>{
    expect(sortBySchool()).toEqual({
        type: 'SORT_BY_SCHOOL'
    });
});
test ('Returns object', ()=>{
    expect(sortByLanguage()).toEqual({
        type: 'SORT_BY_LANGUAGE'
    });
});
test ('Returns object', ()=>{
    expect(sortByCourseName()).toEqual({
        type: 'SORT_BY_COURSENAME'
    });
});
