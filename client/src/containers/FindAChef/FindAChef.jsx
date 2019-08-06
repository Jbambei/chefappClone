import React, {Component} from 'react';
import ResultList from './ResultList';
// import axios from 'axios';
import chefs from '../../devChefData.json'

class FindAChef extends Component {
    constructor(){
        super();
        this.state ={
            chefs
        };
    }

    componentDidMount() {
        // this.searchChefs();
        console.log(this.state)
    }
    // searchChefs = () =>{
    //     axios.get('..')
    // }
    render() {
        return (        
        <div className="container">
            <h1>Local Chefs</h1>
            {this.state.chefs.map(chef=> (
                <ResultList 
                key={chef.id}
                id={chef.id}
                name={chef.name}
                rating={chef.rating}
                image={chef.image}
            />
            ))}
        </div>
        )
    }
}

export default FindAChef
