import React, { Component } from 'react';
import PostSection from '../post_section/PostSection';
import Nav from '../nav/Nav';

class Section extends Component {
    render() {
        return(
            <main className="grid grid-cols-1 container mx-auto my-5 ">
                <PostSection />
                <Nav />

            </main>
        )
    }
}

export default Section;