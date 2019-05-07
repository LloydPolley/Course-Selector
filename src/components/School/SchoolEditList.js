import React from 'react';


const SchoolEditList = (props) => {
    return(
        <ul className="school-list">
            {props.schools.map((school)=>{
                return <li key={school}><p>{school}</p> <button>Remove</button></li>
            })}
        </ul>
    )
}

export default SchoolEditList;