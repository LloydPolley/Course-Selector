import React from "react";
import { connect } from "react-redux";
import { sortByLanguage, sortBySchool, sortByCourseName, setTextFilter } from "../../actions/filters";

class CourseFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: "no-value",
      searchField: ""
    };
  }

  onSortBy = e => {
    var sortBy = e.target.value;
    this.setState(
      () => ({ sortBy }),
      () => {
        if (this.state.sortBy === "language") {
            this.props.dispatch(sortByLanguage());
        } else if (this.state.sortBy === "school") {
            this.props.dispatch(sortBySchool());
        }
        else if (this.state.sortBy === "courseName") {
            this.props.dispatch(sortByCourseName());
        }
      }
    );
  };

  onSearch = (e) => {
    var searchField = e.target.value;
    this.setState(() => ({ searchField }), () => {
        this.props.dispatch(setTextFilter(this.state.searchField))
    });
  }


  render() {
    return (
      <div>
      <input
          placeholder="Search"
          value={this.state.searchField}
          onChange={this.onSearch}
        />
        <select onChange={this.onSortBy} value={this.state.sortBy}>
          <option value="no-value" disabled>
            Sort by
          </option>
          <option value="language">Language</option>
          <option value="school">School</option>
          <option value="courseName">Name</option>
        </select>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      filter: state.filters
  };
};

export default connect(mapStateToProps)(CourseFilters);
