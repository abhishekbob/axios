import React, { Component } from 'react';
import secureAxios from "../config/secureAxios";


const style={
    container :{
        display: 'block',
        background: 'purple',
        padding: '2px',
        border: 'black solid',
        margin: '5px',
        textAlign:'center',
        width:'50%',
        marginLeft:'320px'
    }
}

export default class AddedUser extends Component {
    constructor(props) {
        super(props)
    
       
    }
    componentDidMount(){
        secureAxios({
            method:'post',
            url:'/users',
            data:{name:`${this.props.AddedUser}`,username:'Abhishek'}
        }).then(res=>{console.log(res)}).catch(error=>{console.log('Erroe to post')})
    }
    
    render() {
        const { AddedUser} = this.props;
        console.log(this.props.AddedUser.data)
        return (
            
            <div style={style.container}>
                <div>
                   <center style={{fontSize:'20px',color:'#e6d0ba'}}> {AddedUser}</center>
                </div>    
                
            </div>
        )
    }
}


