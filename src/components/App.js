import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {

//code here 
  const emailRef =useRef();
  const passwordRef =useRef();
  const[formInput,setFormInput]=useState({email:"",
                                          password:"",});
  const[displayMsg,setDisplayMsg]=useState({ emailMsg:"",passwordMsg:"",});
  const handleInputeChange =(e)=>{
    e.persist();
    e.target.id,e.target.value);
    if(e.target.value);
    if(e.traget.id ==="inputEmail"){
      setFormaInput((state)=>{
        return{
          ...state,["email"]:e.target.value,};
      });
    }else{
      setFormInput((state)=>{
        return{...state,["password"]:
               e.target.value,};
      });
    }
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(formInput.email===")
       
       {
       emailRef.current.focus();
    setDisplayMsg({
      emailMs:"",
      passwordMsg:"",
    });
  }
  else{
    setDisplayMsg({
      emailMsg:formaInput.email,passwordMsg:formInput.password,});
    setFormInput({
      email:"",password"",});
  }
};             
                                          

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={} ref={} onChange={}/><br/>
      Password
      <input id="inputPassword" type="text" value={} ref={} onChange={}/><br/>
      <button id="submitButton" onClick={}>Submit</button><br/>
      <p id="emailText">Your Email : {displayMsg.emailMsg}</p>
      <p id ="passwordText">Your Password : {displayMsg.passwordMsg}</p>
      
    </div>
  )
}


export default App;
