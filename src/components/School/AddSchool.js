import React from "react";
import ReactDOM from 'react-dom';

import uuid from "uuid";


import "../../styles/nav.css";
import "../../styles/schools.css";
import { connect } from "react-redux";
import { addSchool, startAddSchool, startSetSchools} from '../../actions/school';
import SchoolEditList from './SchoolEditList';
import store from "../../store/store";

class AddSchool extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newSchool: '',
            schools: {}
        }
    }

    componentDidMount() {
        store.dispatch(startSetSchools());
    }
    
    render(){
        return(
            <div id="school-container" className='page-container'>
                <h1>Edit school</h1>
                <SchoolEditList />
                <form>
                    <input id="" onChange={(e) =>{
                        this.setState({
                            newSchool: e.target.value
                        });
                    }} placeholder='New school'/>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        this.props.dispatch(startAddSchool(this.state.newSchool));
                    }}>Add School</button>
                </form> 
            </div>
        );
    }
}


const mapStateToProps = state => {
    // console.log('school',state)
    return {
        state
    };
};


export default connect(mapStateToProps)(AddSchool);