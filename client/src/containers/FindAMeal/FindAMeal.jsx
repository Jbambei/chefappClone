import React, { Component } from 'react';
// import ResultList from './ResultList';

class FindAMeal extends Component {

    constructor() {
        super();
        this.state = {
            zipcode: "32806"
        };
    }
    componentDidMount() {
        // this.searchMeals();
        console.log(this.state)
    }

    // searchMeals = () =>{
    //     axios.get('..')
    // }

    render() {
        return (
            <div className="container">
                <div className="hero bg-gray">
                    <div className="hero-body">
                        <h1>Featured Meal!</h1>
                    </div>
                </div>
                <div className="empty">
                    <div className="empty-icon">
                        <i className="icon icon-people"></i>
                    </div>
                    <p className="empty-title h5">There's no chef's in your area</p>
                    <p className="empty-subtitle">Come back when this apps complete!</p>
                </div>
            </div>
        )
    }
}

export default FindAMeal