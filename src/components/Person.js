import React, { Component } from 'react';


const style={
    container :{
        display: 'block',
        background: 'purple',
        padding: '2px',
        border: 'black solid',
        margin: '5px',
        textAlign:'center',
        width:'50%',
        marginLeft:'320px',
        borderRadius:'10%'
        
    }
}

export default class Person extends Component {
    constructor(props) {
        super(props)  
    }
    render() {
        const { personItem} = this.props;
        return (
            
            <div style={style.container}>
                <div>
                   <center style={{fontSize:'20px',color:'#e6d0ba'}}> {personItem.name}</center>
                </div>    
                
            </div>
        )
    }
}


