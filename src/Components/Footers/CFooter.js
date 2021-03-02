import React from 'react';
import {useDispatch} from "react-redux";
import btshape from "../media/bottom shape.svg";
import '../media/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import {recoveryCreator,loginCreator} from "../../redux-funcs/actions";


function CFooter(props) {
    const whatPage = props.whatpage;
    const dispatcher=useDispatch()
    if (whatPage === "login") {
        return (
            <div className='topheader btmdiv'>
                <img className="btmshape" src={btshape} alt="buttomShape"/>
                <button type={"submit"} form="formid" className='txt botbut' value='submit'>ورود</button>
                <button type={"button"} style={{position: "absolute", color: "white",backgroundColor:"transparent"}} className="txt txt2"
                        onClick={()=>{dispatcher(recoveryCreator)}}>آیا رمز عبور خود را
                    فراموش کرده اید؟</button>
                <hr className='posabs'/>
                <a href="/signup" className="txt txt3"
                   style={{position: "absolute", bottom: "16%", color: "#b57c85"}}>
                    <i className="fa fa-user-plus"/> ثبت نام
                </a>
            </div>
        );
    } else if (whatPage === "signup") {
        return (
            <div className='topheader btmdiv'>
                <img className="btmshape" src={btshape} alt="buttomShape"/>
                <button type={"submit"} form="signupform" className='txt botbut' value='submit'>ثبت نام</button>
                <hr className='posabsSignUp'/>
                <a href="/" className="txt txt3" style={{position: "absolute", bottom: "28%", color: "#b57c85"}}>
                    <i className="fa fa-user-plus"/> ورود
                </a>
            </div>
        );
    } else {
        return (
            <div className='topheader btmdiv'>
                <img className="btmshape" src={btshape} alt="buttomShape"/>
                <button type={"submit"} className='txt botbut' value='submit'>ارسال</button>
                <button type="button" onClick={() =>dispatcher(loginCreator) } className="txt txt3"
                        style={{backgroundColor:"transparent",position: "absolute", bottom: "40%", color: "#b57c85"}}>
                    <i className="fa fa-user-plus"/> ورود
                </button>
                <hr className='posabs'/>
                <a href="/signup" className="txt txt3"
                   style={{position: "absolute", bottom: "16%", color: "#b57c85"}}>
                    <i className="fa fa-user-plus"/> ثبت نام
                </a>
            </div>
        )
    }
}


export default CFooter