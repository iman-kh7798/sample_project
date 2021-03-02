import React   from 'react';
import Auth_Check from "../HOC/Authentication_Check";
import Header from "../Header/Header";
import {clientRemoveCookies} from "../../cookies";


function AdminPage (){


        return (
            <>
                <Header/>
                <div className='center' style={{width: '100%', height: '100px'}}>
                    <button type='submit' onClick={() => {
                        clientRemoveCookies('auth_token', '/')
                        window.location.replace('/')
                    }}>logout
                    </button>
                    <div>
                        WELCOME
                    </div>
                </div>
            </>
        );

}

export default {
    component: Auth_Check(AdminPage)
};