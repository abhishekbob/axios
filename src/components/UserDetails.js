import React, { Component } from 'react';
import { DataContext } from "../context/DataContext";
import Person from "./Person";
import AddUser from "./AddUser";


export default class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
             UserDetails:[],
             User:'',
             List:[]
        }
    }
   
    addNewUser=(e)=>{
        this.setState({User:e.target.value})
    }
    AddToList=()=>{
        this.setState({List:[...this.state.List,this.state.User]})
    }
    
    render() {
        return (
            <div>
                <center style={{fontSize:'20px',marginTop:'5px'}}>Person Name</center>
                <center style={{marginBottom:'10px'}}>
                <input style={{fontSize:'15px',margin:'5px'}} type='text' onChange={this.addNewUser}></input>
                <button style={{fontSize:'15px',margin:'5px'}} onClick={this.AddToList}>Add</button> </center> 
                {this.context.UserDetails.map((item)=>{
                    return <Person key={item.id} personItem={item}  /> }
                )}
               
                {this.state.List.map((item)=>{
                    return <AddUser key={item} AddedUser={item}/>
                })}
            </div>
        )
    }
}

UserDetails.contextType = DataContext
