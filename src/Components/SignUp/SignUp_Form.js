import React,{useState} from 'react';
import apiCalls from "../../Helpers/api/apiCalls";
import urls from "../../Helpers/api/urls";


function SignUpForm (){



		const [userdata, setUserdata]=useState({email:"",password:"",name:""})

		function onSubmitForm(event)
		{
			event.preventDefault()
			apiCalls.SignUp(urls.URL_Register, userdata, (response) => {
					console.log(response.data)
					alert("شما با موفقیت ثبت نام شدید برای وارد شدن به صفحه ورود بروید")
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



        return(
        	<div style={{marginBottom:'30px'}}>
                <form className='SignUp_form_container' id='signupform' onSubmit={onSubmitForm}>
					    <div>
							<i className='fa fa-user-circle fa-5x' style={{display: "block"}}/>
							<input type='file' id='fileinput'/>
					    </div>
						<div style={{width:'175px'}}>
							<label> نام: </label>
							<input style={{width:'110px'}} className='forminputs' type='text'
							value={userdata.name} onChange={
								event => setUserdata({...userdata,name: event.target.value})} required={true}/>
						</div>

					<div style={{textAlign:"end",width:"240px"}}>
						<label>ایمیل: </label><input className='forminputs' type="email"
					value={userdata.email}  onChange={(e)=>
					{setUserdata({...userdata,email:e.target.value})}}/>
					</div>
					<div style={{textAlign:"end",width:"240px"}}>
						<label>رمز ورود: </label><input className='forminputs' type="password"
					value={userdata.password}  onChange={(e)=>{
						setUserdata({...userdata,password: e.target.value})
					}}/>
					</div>
                </form>
			</div>
        );
}






















{/*	<div>*/}
{/*		<label> شماره موبایل: </label>*/}
{/*		<div style={{display:"inline-block",position:'relative'}} >*/}
{/*			<input style={{position:'relative'}} className='forminputs' type='text' />*/}
{/*			<label id='area_code'>+98</label>*/}
{/*		</div>*/}
{/*		<label> استان: </label>*/}
{/*		<select className='forminputs' style={{width:'100px'}} >*/}
{/*			<option value='' selected disabled hidden>انتخاب کنید</option>*/}
{/*			<option value='tehran'>تهران</option>*/}
{/*			<option value='esfahan'>اصفهان</option>*/}
{/*			<option value='zanjan'>زنجان</option>*/}
{/*			<option value='ardebil'>اردبیل</option>*/}
{/*		</select>*/}
{/*	</div>*/}



export default SignUpForm