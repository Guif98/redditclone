import React, { useContext, useEffect, useState } from "react";
import '../../index.css';
import './navbar.css';
import Logo from '../../logo.png';
import Avatar from '../../avatar.png';
import { SearchIcon, ChatIcon, BellIcon, PlusIcon, UserIcon, ChevronDownIcon, LoginIcon, MoonIcon, LogoutIcon  } from '@heroicons/react/outline';
import Button from "../button/Button";
import DarkThemeButton from './DarkThemeButton';
import AuthModalContext from "../../AuthModalContext";
import axios from "axios";
import UserContext from "../../UserContext";
import ClickOutHandler from 'react-clickout-handler';

function Navbar(){
    const modalContext = useContext(AuthModalContext);
    const user = useContext(UserContext);
    
    const [dropdownmenu, setVisible] = useState('hidden');

    useEffect(() => {
        axios.get('http://localhost:4000/user', {withCredentials:true})
        .then(response => user.setUser(response.data));
      })


    function logout() {
        axios.post('http://localhost:4000/logout', {}, {withCredentials:true})
        .then(() => user.setUser({}));
    }    
    
    return(
        <nav id="mainnav" className="flex w-screen border z-50 border-reddit_border bg-reddit_dark p-2">
            <div className="mx-1 w-8 h-8">
                <a href="http://localhost:3000/">
                    <img src={Logo} alt="logo" className="cursor-pointer"/>
                </a>
            </div>
            <form id="formsearch" action="" className="bg-reddit_dark-brighter flex overflow-hidden sm:w-96  mx-auto p-1 px-3 rounded-md border border-gray-700">
                <SearchIcon className="w-6 h-6 text-gray-300 cursor-pointer hover:opacity-75" />
                <input type="text" className="bg-reddit_dark-brighter h-6 flex-grow text-white p-1 pl-2 pr-0 text-sm block focus:outline-none" placeholder="Search" />
            </form>
            <Button onClick={() => {modalContext.setShow(true); modalContext.setType('login')}} outline="true" className="mx-2 hidden md:block">Log in</Button>
            <Button onClick={() => {modalContext.setShow(true); modalContext.setType('register')}} className="mx-2 hidden md:block">Sign in</Button>
            <button className="hidden md:block lg:block xl:block">
                <ChatIcon className="w-6 h-6 text-gray-400 mx-2 hover:opacity-75"/>
            </button>
            <button className="hidden md:block lg:block xl:block">
                <BellIcon className="w-6 h-6 text-gray-400 mx-2 hover:opacity-75"/>        
            </button>
            <button className="hidden md:block lg:block xl:block">
                <PlusIcon className="w-6 h-6 text-gray-400 mx-2 hover:opacity-75"/>        
            </button>
            <button onClick={() => setVisible('block')} className="flex items-center justify-around mx-2 hover:opacity-75">
                {user.user.length > 0 && (
                    <div className=" w-42 h-8 flex flex-row">
                    <img src={Avatar} alt="logo" className="cursor-pointer w-8 h-8"/>
                    <small className="text-white">{user.user}</small>
                    </div>
                )}
                {user.user.length === undefined && (
                    <UserIcon className="w-6 h-6 text-gray-400 "/>  
                )}
                <ChevronDownIcon className="w-5 h-5 text-gray-500 ml-5"/>  
            </button>
            <ClickOutHandler onClickOut={() => setVisible('hidden')}>
                <div id="dropdownmenu" className={"absolute right-0 top-10 text-gray-300 bg-reddit_dark border border-gray-700 z-10 rounded-md overflow-hidden " + dropdownmenu}>
                    <div className="flex w-60 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"> 
                    <MoonIcon className="w-6 h-6 mr-2"/>Modo noturno
                    <DarkThemeButton />
                    </div>
                    {user.user.length === undefined && (
                        <div onClick={() => {modalContext.setShow(true); modalContext.setType('login')}} className="flex w-60 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"> 
                            <LoginIcon  className="w-6 h-6 mr-2" />
                                Log In / Sign Up
                        </div>
                    )}
                    {user.user.length > 0 && (
                        <div onClick={() => logout()} className="flex w-60 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"> 
                            <LogoutIcon  className="w-6 h-6 mr-2" />
                                Log Out
                        </div>
                    )}
                </div>
            </ClickOutHandler>
        </nav>
    )
}

export default Navbar;