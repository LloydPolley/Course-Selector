import filtersReducer from '../../reducers/filters';


test('should set up default filter values', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'language'
    })
})

test('should set up default filter values', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_SCHOOL'});
    expect(state.sortBy).toEqual('school');
})

test('should set up default filter values', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_LANGUAGE'});
    expect(state.sortBy).toEqual('language');
})
test('should set up default filter values', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_COURSENAME'});
    expect(state.sortBy).toEqual('courseName');
})
test('should set up default filter values', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'Hello'});
    expect(state.text).toEqual('Hello');
})