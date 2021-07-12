import React, { Component } from 'react';
import {HashLink as NavLink} from 'react-router-hash-link';

class Navbar extends Component {
    render() {
        return (
            <>
            <nav className='light-red'>
                <div className='container'>
                    <ul class="row">
                      <li>
                          <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                          <NavLink to="/Play">Play</NavLink>
                      </li>
                      <li>
                          <NavLink to="/Scoretracking">Track your score</NavLink>
                      </li>
                    </ul>
                </div>
            </nav>  
            </>
        );
    }
}

export default Navbar;