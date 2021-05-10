import React, { createContext } from 'react';
import axios from "axios";
import secureAxios from "../config/secureAxios";

export const DataContext= createContext()
export default class DataContextProvider extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             UserDetails:[],
             
        }
    }
    componentDidMount(){
       axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/users'

        }).then( res=>{console.log(res); return res.data } )
        .then(data=>{this.setState({UserDetails:data})})
        .catch(err=>{console.log('Error in server call')})
    
    }
    render() {
        return (
            
                <DataContext.Provider value={{UserDetails:this.state.UserDetails}}>
                    {this.props.children}
                </DataContext.Provider>
                
            
        )
    }
}


