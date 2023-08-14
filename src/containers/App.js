import React, { Component } from "react";
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';

//combining components into a signle app

//create a class to use state. Used for searching and filtering robots
class App extends Component {
    constructor() {
        //super() must be declared before using this
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //create a function to change state. Use arrow notation to refer to the class and not the input
    onSearchEntry = (event) => {
        //update the state with the text in the search field
        this.setState({ searchfield:event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchEntry}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        ); 
    }   
}

//this.state.robot
export default App;