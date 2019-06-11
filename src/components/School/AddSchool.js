import React from "react";
import "../../styles/nav.css";
import "../../styles/schools.css";
import { connect } from "react-redux";
import { addSchool } from '../../actions/school';
import SchoolEditList from './SchoolEditList';


class AddSchool extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newSchool: '',
            schools: {}
        }
    }
    onClick = (e) =>{
        e.preventDefault();
        this.props.dispatch(addSchool(this.state.newSchool));
        // console.log(this.props)
        // this.props.history.push('/');

    }
    getSchool = (e) => {
        this.setState({
            newSchool: e.target.value
        },()=>{
            console.log(this.state);
        });
    }
    render(){
        return(
            <div className='page-container'>
                <h1>Edit school</h1>
                <SchoolEditList/>
                <form>
                    <input onChange={(e) =>{
                        this.getSchool(e);
                    }} placeholder='New school'/>
                    <button onClick={(e)=>{
                        this.onClick(e);
                    }}>Add School</button>
                </form> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.schools, "Add SChool page");
    return {
        schools: state.schools
    };
  };

export default connect(mapStateToProps)(AddSchool);