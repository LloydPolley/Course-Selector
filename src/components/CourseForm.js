import React from "react";
import ReactDOM from "react-dom";

import '../styles/CourseForm.css'

class CourseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        courseLang: props.course ? props.course.courseLang :'en',
        courseName: props.course ? props.course.courseName :'',
        courseLength: props.course ? props.course.courseLength :'no-value',
        coursePrice: props.course ? props.course.coursePrice :'',
        courseDescription: props.course ? props.course.courseDescription :'',
        school: props.course ? props.course.school : 'no-value'
    }
  }

  onLanguageChange = (e) => {
    var courseLang = e.target.value;
    this.setState(() => ({ courseLang }));
  };
  onCourseName = (e) => {
    var courseName = e.target.value;
    this.setState(() => ({ courseName }));
  };

  onPrice = (e) => {
    var coursePrice = e.target.value;
    this.setState(() => ({ coursePrice }));
  };

  onLength = (e) => {
    var courseLength = e.target.value;
    this.setState(() => ({ courseLength }));
  };
  onCourseDescription = (e) => {
    var courseDescription = e.target.value;
    this.setState(() => ({ courseDescription }));
  };

  onSchool = (e) => {
    var school = e.target.value;
    this.setState(() => ({ school }));
  };

  onSubmit = (e) => {
     e.preventDefault();
     console.log('click');
     this.props.submit({
      courseLang: this.state.courseLang,
      courseName: this.state.courseName,
      coursePrice: this.state.coursePrice,
      courseLength: this.state.courseLength,
      courseDescription: this.state.courseDescription,
      school: this.state.school
     });
  }

  render() {
    return (
      <div>
        <form>
          <select onChange={this.onLanguageChange}>
            <option>EN</option>
            <option>FR</option>
            <option>DE</option>
            <option>ES</option>
          </select>
          <input placeholder="Course name" onChange={this.onCourseName} value={this.state.courseName}/>
          <input placeholder="Price" onChange={this.onPrice} value={this.state.coursePrice}/>
          <select value={this.state.courseLength} onChange={this.onLength}>
            <option value='no-value' disabled>Select length of course</option>
            <option value='1 week'>1 Week</option>
            <option value='2 week'>2 Week</option>
            <option value='3 week'>3 Week</option>
            <option value='4 week'>4 Week</option>
          </select>
          
          <textarea placeholder="Course description" onChange={this.onCourseDescription} value={this.state.courseDescription}/>

          <select value={this.state.school} onChange={this.onSchool}>
            <option value='no-value' disabled>Select school</option>
            <option value='oxford'>Oxford</option>
            <option value='cambridge'>Cambridge</option>
            <option value='boston'>Boston</option>
            <option value='telford'>Telford</option>
          </select>
          <button onClick={this.onSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default CourseForm;
