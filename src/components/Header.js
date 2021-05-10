import React, { Component } from 'react';

const style={
    container:{
        display:'block',
        background:'#0f1763',
        color:'#e6d0ba',
        width:'50%',
        marginLeft:'320px',
        height:'60px',
        marginTop:'10px',
        fontSize:'30px',
        padding:'5px',
        fontWeight:'700'

    }
}

export class Header extends Component {
    render() {
        return (
            <div>
                <center style={style.container}> Digikull Students</center>
            </div>
        )
    }
}

export default Header
