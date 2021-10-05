import React, { Component } from 'react';
import PostSection from '../post_section/PostSection';
import Nav from '../nav/Nav';
import Post from '../post/Post';

class Section extends Component {
    render() {
        return(
            <main className="grid  grid-cols-12 container mx-auto my-5">
                <article className="mx-auto col-start-2 col-end-12  lg:col-start-2 lg:col-end-9">
                    <PostSection />
                    <Post />
                </article>
                <article className="col-start-10 col-end-11 invisible lg:visible xl:visible">
                    <Nav />
                </article>
            </main>
            
        )
    }
}

export default Section;