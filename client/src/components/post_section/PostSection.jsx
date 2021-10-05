import React, { Component } from 'react';
import Avatar from '../../avatar.png';
import { PhotographIcon, ShareIcon } from '@heroicons/react/outline'; 

class PostSection extends Component {
    render() {
        return(
            <article className="container rounded-md border border-reddit_border items-center flex flex-1 bg-reddit_dark">
                <form action="" className="flex p-2 flex-grow">
                    <img src={Avatar} alt="avatar" className="h-12 w-12"/>
                    <input type="text" placeholder="Create Post" className="bg-reddit_dark-brighter focus:outline-none  hover:bg-reddit_dark hover:border-gray-300 text-white h-auto flex-grow rounded-md px-3 mx-2"/>
                </form>
                <button className="mx-3">
                    <PhotographIcon className="h-8 w-8 text-gray-400"/>
                </button>
                <button className="mx-3">
                    <ShareIcon className="h-8 w-8 text-gray-400"/>
                </button>
            </article>
        )
    }
}

export default PostSection;