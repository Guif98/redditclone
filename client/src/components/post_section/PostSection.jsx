import React, { Component } from 'react';
import Avatar from '../../avatar.png';
import { PhotographIcon, ShareIcon } from '@heroicons/react/outline'; 

class PostSection extends Component {
    render() {
        return(
            <article className="h-20 rounded-md border border-reddit_border items-center w-full flex flex-row bg-reddit_dark">
                <form action="" className="flex flex-grow p-2">
                    <img src={Avatar} alt="avatar" className="h-12 w-12"/>
                    <input id="createpost" name="createpost" type="text" placeholder="Create Post" className="overflow-hidden bg-reddit_dark-brighter focus:outline-none text-white w-72 md:w-full lg:w-full xl:w-full rounded-md px-3 mx-2"/>
                </form>
                <button className="mx-auto">
                    <PhotographIcon className="h-8 w-8 text-gray-400 hover:opacity-75"/>
                </button>
                <button className="mx-auto px-3">
                    <ShareIcon className="h-8 w-8 hidden md:block lg:block xl:block text-gray-400 hover:opacity-75"/>
                </button>
            </article>
        )
    }
}

export default PostSection;