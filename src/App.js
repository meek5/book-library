import React, { Component } from 'react';
import logo from './logo.svg';
import {BOOKS} from './shared/books'
import Books from './components/books'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: BOOKS
    }
  }

  render() {
    return (
      <div>        
          <Books books={this.state.books} />        
      </div>
    );
  }
}

export default App;
