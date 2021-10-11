import React, { useState, useContext } from "react";
import Button from "../button/Button";
import Input from "./Input";
import Side from '../../side.png';
import axios from 'axios';
import AuthModalContext from "../../AuthModalContext";
import ClickOutHandler from 'react-clickout-handler';
import UserContext from "../../UserContext";


function AuthModal() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const modalContext = useContext(AuthModalContext);
    const user = useContext(UserContext);
    const visibleClass = modalContext.show ? 'block' : 'hidden'; 


    function register(e) {
        e.preventDefault();
        const data = {username, password};
        axios.post('http://localhost:4000/register', data, {withCredentials:true})
        .then(() => {
            user.setUser({username})
            setUsername('');
            setPassword('');
            modalContext.setShow(false);
        });
    }

    return(
        <ClickOutHandler onClickOut={() => modalContext.setShow(false)}>
        <div className={"fixed invisible md:visible md:w-7/12 xl:w-6/12 h-5/6 mx-auto md:left-40 top-12 lg:right-64 z-20 grid grid-cols-12 rounded-md "+ visibleClass} style={{backgroundColor: 'rgba(0,0,0, .6)'}}>
            <div className="col-start-1 col-end-3">
                <img src={Side} alt="" className="h-full w-full rounded-l-md" />
            </div>
            
            <div style={{backgroundColor: '#FFFFFF'}} className="col-start-3 col-end-13 rounded-r-md h-ful p-5">
                <div className="my-10 w-full">
                    {modalContext.type === 'login' && (
                        <h5 className="text-2xl">Log in</h5>
                    )}
                    {modalContext.type === 'register' && (
                        <h5 className="text-2xl">Sign up</h5>
                    )}
                    <p className="text-sm">By continuing, you agree to our <a className="text-blue-400" target="_blank" rel="noreferrer noopener" href="https://www.redditinc.com/policies/user-agreement">User Agreement</a> and our <a className="text-blue-400" rel="noopener noreferrer" target="_blank" href="https://www.redditinc.com/policies/privacy-policy">Privacy Policy</a>.</p>
                </div>
                <div className="my-10 md:w-60 xl:w-96">
                    <Input className="my-2 w-full" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                    <Input type="password" className="my-2 w-full" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    {modalContext.type === 'login' && (
                        <Button onClick={() => {modalContext.setType('login'); modalContext.setShow(true)}} className="w-full py-2 bg-reddit_button text-white">Log In</Button>
                    )}
                    {modalContext.type === 'register' && (
                        <Button onClick={e => {register(e); modalContext.setType('register'); modalContext.setShow(true)}} className="w-full py-2 bg-reddit_button text-white">Register</Button>
                    )}
                </div>
                <div className="my-10 w-60 ">
                    <small className="block">Forgot  <a className="text-blue-400" rel="noreferrer noopener" href="http://localhost:3000/">username</a> or <a className="text-blue-400" rel="noreferrer noopener" href="http://localhost:3000/">password</a>?</small>
                    {modalContext.type === 'register' && (
                        <small>Already a redditor? <button onClick={() => modalContext.setType('login')} className="text-blue-400">Login</button></small>
                    )}
                    {modalContext.type === 'login' && (
                        <small>First time on Reddit? <button onClick={() => modalContext.setType('register')} className="text-blue-400" rel="noreferrer noopener" href="http://localhost:3000/">SIGN UP</button></small>
                    )}
                </div>
            </div>
        </div>
        </ClickOutHandler>
    )
}

export default AuthModal;