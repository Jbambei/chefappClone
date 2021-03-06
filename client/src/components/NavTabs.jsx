import React from 'react';
import { Link } from 'react-router-dom';

class NavTabs extends React.Component {
    constructor() {
        super();
        this.state = {
          user: false
        };
      }

      componentDidMount() {
        if(localStorage.getItem('token') === null){
          this.setState({ user: false })
        } else { 
          this.setState({ user: true })
        }
        }
        
        logout() {
                localStorage.removeItem('token');
                this.setState({ user: false})
        }

    render () {
        if (this.state.user === true) {
            return (
                <header className="navbar">
                    <section className="navbar-section">
                        <Link to="/" className="navbar-brand mr-2">HachApp</Link>
                    </section>
                    <section className="navbar-section">
                        <Link to="/" className="btn btn-link">Home</Link>
                        <Link to="/FindAChef" className="btn btn-link">Find A Chef</Link> 
                        <Link to="/FindAMeal" className="btn btn-link">Find A Meal</Link>
                        <Link to ="/BookNew" className="btn btn-link">New Booking</Link>
                        <Link to="/tempGeoLocation" className="btn btn-link">tempGeo</Link>
                        <Link to="/" className="btn btn-link" onClick={() => {this.logout()}}>Logout</Link>
                    </section>
                </header>
                )        
        }
        else {
            return (
                <header className="navbar">
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
    }

    
}

export default NavTabs