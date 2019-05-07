import uuid from "uuid";

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

export const addSchool = (school = "") => ({
  type: "ADD_SCHOOL",
  id:uuid(),
  school
});

export const removeSchool = (id) => ({
  type: "REMOVE_SCHOOL",
  id
});

export const getSchools = (schools) => {
  return schools
};
