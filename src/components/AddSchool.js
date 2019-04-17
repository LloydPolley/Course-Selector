import React from "react";
import "../styles/nav.css";
import { connect } from "react-redux";
import { addSchool } from '../actions/school';


class AddSchool extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            school: ''
        }
    }
    onClick = (e) =>{
        e.preventDefault();
        this.props.dispatch(addSchool(this.state.school));
        // console.log(this.props)
        this.props.history.push('/');

    }
    getSchool = (e) => {
        this.setState({
            school: e.target.value
        },()=>{
            console.log(this.state);
        });
    }
    render(){
        return(
            <div className='page-container'>
                <h1>Add school</h1>
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

export default connect()(AddSchool);