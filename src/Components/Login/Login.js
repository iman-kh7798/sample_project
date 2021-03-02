import React from 'react';
import {useSelector} from "react-redux";
import Header from "../Header/Header";
import Center from "./Center";
import Login_Form from "./Login_Form";
import Footer from "../Footers/Footer";
import PasswordRecovery from "../Password_Forgotten/Password_Recovery";





function Login_Page () {

    const state=useSelector(({whatPage})=>whatPage)
    if (state){
        return (
            <div className='container'>
                <Header/>
                <div>
                    <Center/>
                    <Login_Form/>
                </div>
                <Footer login={"login"}/>
            </div>
        );
    }else {
     return(
         <PasswordRecovery/>
         )
    }
}
export default {
    component:Login_Page
}
