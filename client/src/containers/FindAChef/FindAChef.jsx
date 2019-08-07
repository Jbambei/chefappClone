import React, {Component} from 'react';
import ResultList from './ResultList';
// import axios from 'axios';
import chefs from '../../devChefData.json'

class FindAChef extends Component {
    constructor(){
        super();
        this.state ={
            //dummy data imported
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
            <div className="columns">
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

        </div>
        )
    }
}

export default FindAChef
