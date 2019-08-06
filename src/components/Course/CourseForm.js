import React from "react";
import { connect } from "react-redux";
import "../../styles/CourseForm.css";
import SchoolDropdown from "../School/SchoolDropdown";

import { startSetSchools } from "../../actions/school";

class CourseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseLang: props.course ? props.course.courseLang : "en",
      courseName: props.course ? props.course.courseName : "",
      courseLength: props.course ? props.course.courseLength : "no-value",
      coursePrice: props.course ? props.course.coursePrice : "",
      courseDescription: props.course ? props.course.courseDescription : "",
      school: props.course ? props.course.school : "no-value"
    };
  }
  onLanguageChange = e => {
    var courseLang = e.target.value;
    this.setState(() => ({ courseLang }));
  };
  onCourseName = e => {
    var courseName = e.target.value;
    this.setState(() => ({ courseName }));
  };

  onPrice = e => {
    var coursePrice = e.target.value;
    this.setState(() => ({ coursePrice }));
  };

  onLength = e => {
    var courseLength = e.target.value;
    this.setState(() => ({ courseLength }));
  };
  onCourseDescription = e => {
    var courseDescription = e.target.value;
    this.setState(() => ({ courseDescription }));
  };

  onSchool = e => {
    var school = e.target.value;
    this.setState(() => ({ school }));
  };

  componentDidMount() {
    this.props.dispatch(startSetSchools());
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("click");
    this.props.submit({
      courseLang: this.state.courseLang,
      courseName: this.state.courseName,
      coursePrice: this.state.coursePrice,
      courseLength: this.state.courseLength,
      courseDescription: this.state.courseDescription,
      school: this.state.school
    });
  };

  render() {
    return (
      <div>
        <form>
          <select
            value={this.state.courseLang}
            onChange={this.onLanguageChange}
          >
            <option>EN</option>
            <option>FR</option>
            <option>DE</option>
            <option>ES</option>
          </select>
          <input
            placeholder="Course name"
            onChange={this.onCourseName}
            value={this.state.courseName}
          />
          <input
            placeholder="1 Week Price"
            onChange={this.onPrice}
            value={this.state.coursePrice}
          />
          <select value={this.state.courseLength} onChange={this.onLength}>
            <option value="no-value" disabled>
              Up to weeks Available
            </option>
            <option value="1 week">1 Weeks</option>
            <option value="2 week">2 Weeks</option>
            <option value="3 week">3 Weeks</option>
            <option value="4 week">4 Weeks</option>
            <option value="5 week">5 Weeks</option>
            <option value="6 week">6 Weeks</option>
            <option value="7 week">7 Weeks</option>
            <option value="8 week">8 Weeks</option>
            <option value="9 week">9 Weeks</option>
            <option value="10 week">10 Weeks</option>
          </select>
          <textarea
            placeholder="Course description"
            onChange={this.onCourseDescription}
            value={this.state.courseDescription}
          />
          <SchoolDropdown value={this.state.school} onChange={this.onSchool} />
          <button onClick={this.onSubmit}>+</button>
        </form>
      </div>
    );
  }
}

export default connect()(CourseForm);
