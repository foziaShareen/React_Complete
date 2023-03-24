import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {   
      coders: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ coders: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { coders, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredCoders = coders.filter(coder =>
      coder.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
  

    return (

      <div className='App'>
        
        {/* {filteredCoders.map((coder) => {
          return (
            <div>
              {coder.name}
            </div>
          )
        })} */}
        
        <br></br>  
        <SearchBox placeholder={ 'search user'} className={'search box'} onChangeHandler={onSearchChange}/>
        <CardList coders={filteredCoders} />
        
        
        
      </div>
    );
  }
}

export default App;