import React from 'react';
import '../styles.css'
import Header from "../Header/Header";
import Footer from "../Footers/Footer";
import SignUpForm from "./SignUp_Form";
function SignUp() {
        return (
            <div className='container'>
                <Header/>
                <SignUpForm/>
                <Footer login={"signup"}/>
            </div>
        );
    }

export default {
    component:SignUp}