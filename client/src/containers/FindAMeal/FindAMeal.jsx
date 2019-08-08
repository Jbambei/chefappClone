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
            <div class="container">
                <div className="hero bg-gray">
                    <div className="hero-body">
                        <h1>Featured Meal!</h1>
                    </div>
                </div>
                <div class="empty">
                    <div class="empty-icon">
                        <i class="icon icon-people"></i>
                    </div>
                    <p class="empty-title h5">There's no chef's in your area</p>
                    <p class="empty-subtitle">Come back when this apps complete!</p>
                </div>
            </div>
        )
    }
}

export default FindAMeal