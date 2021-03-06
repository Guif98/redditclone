import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return(
            <nav className="flex flex-col col-start-10 col-end-12 rounded-md w-72 border-reddit_border bg-reddit_dark text-white">
                <header id="nav-header" className="container text-center font-bold h-20 border-reddit_border rounded-t-md ">
                    <h2>Comunidades mais populares sobre Esportes</h2>
                </header>
                <article className="container align-text-bottom">
                    <ol>
                        <li className="border-l border-r border-b border-reddit_border">
                            r/nba
                        </li>
                        <li className="border-l border-r border-b border-reddit_border">
                            r/FIFA
                        </li>
                        <li className="border-l border-r border-b border-reddit_border">
                            r/hockey
                        </li>
                        <li className="border-l border-r border-b border-reddit_border">
                            r/nrl
                        </li>
                        <li className="border-l border-r border-reddit_border">
                            r/Cricket
                        </li>
                    </ol>
                </article>
                <footer className="container text-center align-text-bottom border-r border-l border-b border-reddit_border rounded-b-md p-5">
                    <a target="_blank" href="https://www.youtube.com/watch?v=jo8lQVtBTFk" rel="noopener noreferrer">
                        <button className="bg-gray-300 hover:bg-gray-400 text-reddit_dark font-bold py-2 px-20 rounded-full">
                            See all
                        </button>
                    </a>
                </footer>
            </nav>
        )
    }
}

export default Nav