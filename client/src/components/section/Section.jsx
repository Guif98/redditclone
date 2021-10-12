import React, { useContext } from 'react';
import PostSection from '../post_section/PostSection';
import Nav from '../nav/Nav';
import Post from '../post/Post';
import UserContext from '../../UserContext';

function Section(){
    const user = useContext(UserContext);
    return(
        <main className="grid grid-cols-12 container mx-auto my-5 w-screen">
            <article className="mx-auto px-4 col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-2 lg:col-end-9">
                {user.user.length > 0 && (
                    <PostSection />
                )}
                <Post />
            </article>
            <article className="col-start-10 col-end-11 invisible lg:visible xl:visible">
                <Nav />
            </article>
        </main>
        
    )
}


export default Section;