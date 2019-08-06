import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
    return (
        <header class="navbar">
            <section className="navbar-section">
                <Link to="/" className="navbar-brand mr-2">HachApp</Link>
            </section>
            <section className="navbar-section">
                <Link to="/" className="btn btn-link">Home</Link>
                <Link to="/ClientSignUp" className="btn btn-link">Sign Up</Link>
                <Link to="/Login" className="btn btn-link">Login</Link>
            </section>
        </header>
    )
}

export default NavTabs