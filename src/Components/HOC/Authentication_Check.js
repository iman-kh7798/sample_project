import React,{Component} from "react";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

export default function Auth_Check(ChildComponent)
{
    class requireAuth extends Component
    {

        render() {
            switch (this.props.auth) {
                case null:
                    return <Redirect to='/'/>
                default:
                    return <ChildComponent {...this.props}/>
            }
        }
    }

    const mapStateToProps=({auth})=>{
        return {auth}
    }

    return connect(mapStateToProps)(requireAuth)
}