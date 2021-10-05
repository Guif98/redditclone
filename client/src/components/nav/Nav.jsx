import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(
            <nav className="rounded-md border-reddit_border">
                <article className="container rounded-md border h-96 border-reddit_border items-center flex flex-auto bg-reddit_dark">
                    <h2 className="text-white">Top Aww Communities</h2>
                </article>
            </nav>
        )
    }
}

export default Nav