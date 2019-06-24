import React from "react";
import ReactDOM from 'react-dom';

import "../../styles/nav.css";
import "../../styles/schools.css";
import { connect } from "react-redux";
import { startAddSchool, startSetSchools, getSchools, addSchool } from '../../actions/school';
import SchoolEditList from './SchoolEditList';



class AddSchool extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newSchool: '',
            schools: {}
        }
    }
    
    render(){
        return(
            <div id="school-container" className='page-container'>
                <h1>Edit school</h1>
                <SchoolEditList/>
                <form>
                    <input onChange={(e) =>{
                        this.setState({
                            newSchool: e.target.value
                        });
                    }} placeholder='New school'/>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        this.props.dispatch(addSchool(this.state.newSchool));
                    }}>Add School</button>
                </form> 
            </div>
        );
    }
}



const mapStateToProps = state => {
    console.log('school',state)
    return {
        schools: getSchools()
    };
};

// const mapStateToProps = (state) => {
//     return{
//         courses: getVisibleCourses(state.courses, state.filters)
//     }
// }

export default connect(mapStateToProps)(AddSchool);