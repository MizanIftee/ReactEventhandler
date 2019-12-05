import React from 'react'

const Userinput = (props) =>{

    return(<div>
        <input type='input' onChange={props.event} value={props.username}></input>
        <p value={props.username}>{props.username}</p>
        
    </div>);
}

export default Userinput;