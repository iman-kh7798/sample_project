import React from "react";
import Header from "../Header/Header";
import Footer from "../Footers/Footer";




function PasswordRecovery() {
    const style={
        fontFamily:'AMehdiHeydari',
        textAlign:'center'
    }
    return (
        <div className='container'>
            <Header/>
            <h1 style={style}>در این صفحه شما می توانید رمز عبور خود را بازگردانی کنید!</h1>
            <Footer login={"recovery"}/>
        </div>
    );
}
export default PasswordRecovery;