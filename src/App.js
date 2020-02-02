import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      members : [],
      searchField : ""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({members : users}))
  }
  render(){
    const {members, searchField} = this.state;
    const filtredMembers = members.filter(member => member.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>L'mondama</h1>
        <SearchBox placeholder='Search for a member' handleChange = {e => this.setState({searchField : e.target.value})} />
        <CardList members = {filtredMembers}>
        </CardList>
    </div>
    );
  }
}

export default App;
