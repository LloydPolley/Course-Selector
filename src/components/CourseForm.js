import React from "react";
import ReactDOM from "react-dom";

import '../styles/CourseForm.css'

class CourseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        courseLang: 'en',
        courseName: '',
        courseLength: '',
        coursePrice: '',
        courseDescription: '',
        school: ''
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

  onSubmit = (e) => {
     e.preventDefault();
     console.log('click');
     console.log(this.state);
     this.props.onSubmit();
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
          <select defaultValue="no-value" onChange={this.onLength}>
            <option value='no-value' disabled>Select length of course</option>
            <option>1 Week</option>
            <option>2 Week</option>
            <option>3 Week</option>
            <option>4 Week</option>
          </select>
          <textarea placeholder="Course description" onChange={this.onCourseDescription} value={this.state.courseDescription}/>
          <button onClick={this.onSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default CourseForm;
