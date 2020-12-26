import React, { Component } from 'react';

import { CardList } from "./components/CardList/CardList"
import {SearchBox} from "./components/SearchBox/SearchBox"
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            monsters: [],
            searchQuery: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ monsters: [...data] })
            })
    }

    handleChange = (e) =>{
    this.setState({ searchQuery: e.target.value })
    }

    render() {

        const { monsters, searchQuery } = this.state
        const filteredMonsters = monsters.filter(
            monster => monster.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
        return (
            <div className="App" >
                <header className="App-header" >
                    <h1>Monster Rolodex</h1>
                </header>
                <section className="container" >
                    <SearchBox  placeholder="Search Monster" handlechange={this.handleChange}></SearchBox>
                    <CardList monsters={filteredMonsters} />
                </section>
            </div>
        );
    }
}


export default App;