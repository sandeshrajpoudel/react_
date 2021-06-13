//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {SearchBox} from './components/search-box/search-box.component'

import {CardList} from './components/card-list/card-list.component'

class App extends Component {
  constructor(){
    super();
    this.state={
      string: "hello world",
      string1: "sandesh",
      monsters: []
    }
  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respone=>respone.json())
    .then(users =>this.setState({monsters: users}))

  }
  render(){
  return (
    <div className="App">
      <SearchBox
      placeholder='search monsters'
    //   handleChange={e=> this.setState({
    //     searchField: e.target.value

    //   })
    // }
      />
    <CardList monsters={this.state.monsters}>
     
  

     
        </CardList>
    </div>
  );
}
}

export default App;
