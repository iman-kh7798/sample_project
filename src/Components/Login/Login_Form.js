import React, {useState,useEffect} from 'react';
import apiCalls from "../../Helpers/api/apiCalls";
import urls from "../../Helpers/api/urls";
import {clientSetCookies} from "../../cookies";


function Login_Form() {

    const [users, setUsers] = useState({email: "", password: ""})
    const [checkBox,setcheckBox]=useState(false)
    useEffect(() => {
        if (localStorage.checkbox && localStorage.checkbox !== "") {
            setcheckBox(true)
            users.email = localStorage.email
            users.password = localStorage.password

        } else {
            setcheckBox(false)
            users.email = ''
            users.password = ''
        }
    },[])




    function onSubmitFrom(event) {
        event.preventDefault()


        if (checkBox && users.email !== "" && users.password !== "") {
            localStorage.email = users.email
            localStorage.checkbox = checkBox
            localStorage.password = users.password
        } else {
            localStorage.email = ''
            localStorage.checkbox = ''
            localStorage.password = ''
        }
        apiCalls.Login(urls.URL_Login, users, (response) => {
                clientSetCookies("auth_token", response.data.token, "/", 31536000);
                window.location.replace('/admins')
            },
            (error) => {
                console.log(error)
            },
            (error) => {
                console.log(error)
            },
            (error) => {
                console.log(error)
            },
        );
    }

    return (
        <form id='formid' onSubmit={onSubmitFrom} autoComplete="on">
            <div>
                <div className='center'>
                    <div>
                        <div className='labels'>
                            <label>نام کاربری: </label>
                        </div>
                        <input value={users.email} className='forminputs' id='emailField' type='email' style={{paddingRight: '7px'}}
                                onChange={
                            (e) => setUsers({...users, email: e.target.value})}/>
                    </div>
                    <div>
                        <div className='labels'><label>رمز عبور: </label></div>
                        <input className='forminputs' id='passwordField'
                               style={{paddingRight: '7px'}} type='password' value={users.password}
                                onChange={event => setUsers({...users, password: event.target.value})}
                        />
                    </div>
                    <div>
                        <input checked={checkBox} id='checkField' style={{height: "11px", width: "11px"}} value="lsRememberMe"
                               type='checkbox' onChange={() => setcheckBox(!checkBox)}
                        /><label className='formcheck'> ذخیره شود</label>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Login_Form;