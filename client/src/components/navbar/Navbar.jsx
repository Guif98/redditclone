import React, { Component } from "react";
import '../../index.css';
import Logo from '../../logo.png';
import { SearchIcon, ChatIcon, BellIcon, PlusIcon, UserIcon, ChevronDownIcon  } from '@heroicons/react/outline';

class Navbar extends Component {
    render() {
        return(
            <nav className="flex w-screen border z-50 border-reddit_border bg-reddit_dark p-2">
                <div className="mx-1 w-8 h-8">
                    <img src={Logo} alt="logo" className="cursor-pointer"/>
                </div>
                <form action="" className="bg-reddit_dark-brighter flex  mx-auto p-1 px-3 rounded-md border border-gray-700">
                    <SearchIcon className="w-6 h-6 text-gray-300 cursor-pointer hover:opacity-75" />
                    <input type="text" className="bg-reddit_dark-brighter h-6 flex-grow text-white p-1 pl-2 pr-0 text-sm block focus:outline-none" placeholder="Search" />
                </form>
                <button className="hidden md:block lg:block xl:block">
                    <ChatIcon className="w-6 h-6 text-gray-400 mx-2 hover:opacity-75"/>
                </button>
                <button className="hidden md:block lg:block xl:block">
                    <BellIcon className="w-6 h-6 text-gray-400 mx-2 hover:opacity-75"/>        
                </button>
                <button className="hidden md:block lg:block xl:block">
                    <PlusIcon className="w-6 h-6 text-gray-400 mx-2 hover:opacity-75"/>        
                </button>
                <button className="flex items-center mx-2 hover:opacity-75">
                    <UserIcon className="w-6 h-6 text-gray-400 "/>  
                    <ChevronDownIcon className="w-5 h-5 text-gray-500"/>  
                </button>
            </nav>
        )
   
    }
}

export default Navbar;