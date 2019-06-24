import database from '../firebase/firebase';


//Redux way

//component calls action generator
//action generator generates object returning it
//component dispatches object
//redux store updates 

//Firebase way 

//component calls action generator
//action generator generates FUNCTION returning it
//component dispatches FUNCTION
//function runs

export const addSchool = (school = "", id) => ({
  type: "ADD_SCHOOL",
  id,
  school
});

export const startAddSchool = (school) => {
  return (dispatch) => {
      return database.ref('schools').push(school).then((ref)=>{
          dispatch(addSchool(school, ref.key));
      });
  }
}

export const removeSchool = (school) => ({
  type: "REMOVE_SCHOOL",
  school
});

export const getSchools = (schools) => ({
  type: 'GET_SCHOOLS',
  schools
});

export const setSchools = (schools) => ({
  type: 'SET_SCHOOLS',
  schools
});

export const startSetSchools = () => {
  return (dispatch) => {
      return database.ref('schools').once('value').then((snapshot)=>{
          const schools = [];

          snapshot.forEach((childSnapshot)=>{
              schools.push({
                  id: childSnapshot.key,
                  ...childSnapshot.val()
              })
          })
          dispatch(setSchools(schools));
      })
  }
};
