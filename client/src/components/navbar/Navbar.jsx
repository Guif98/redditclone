import React, { useContext } from "react";
import '../../index.css';
import './navbar.css';
import Logo from '../../logo.png';
import { SearchIcon, ChatIcon, BellIcon, PlusIcon, UserIcon, ChevronDownIcon, LoginIcon, MoonIcon  } from '@heroicons/react/outline';
import Button from "../button/Button";
import DarkThemeButton from './DarkThemeButton';
import AuthModalContext from "../../AuthModalContext";


function dropDown() {
    const dropDownMenu = document.getElementById('dropdownmenu');
    dropDownMenu.classList.contains('hidden') ? dropDownMenu.classList.remove('hidden') : dropDownMenu.classList.add('hidden');
}


function Navbar(){
    const modalContext = useContext(AuthModalContext);
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
            <button onClick={dropDown} className="flex items-center mx-2 hover:opacity-75">
                <UserIcon className="w-6 h-6 text-gray-400 "/>  
                <ChevronDownIcon className="w-5 h-5 text-gray-500"/>  
            </button>
            
            <div id="dropdownmenu" className="absolute hidden right-0 top-10 text-gray-300 bg-reddit_dark border border-gray-700 z-10 rounded-md overflow-hidden">
                <div className="flex w-60 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"> 
                <MoonIcon className="w-6 h-6 mr-2"/>Modo noturno
                <DarkThemeButton />
                </div>
                <div onClick={() => {modalContext.setShow(true); modalContext.setType('login')}} className="flex w-60 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"> 
                    <LoginIcon  className="w-6 h-6 mr-2" />
                    Log In / Sign Up
                </div>
            </div>
        </nav>
    )
}

export default Navbar;