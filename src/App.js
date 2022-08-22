import React, { Component } from 'react';
import './App.css';
import PostForm from './components/postForm';
import PostList from './components/postList';

class App extends Component {
  render() { 
    return (
      <div className="App">
      {/* <PostList /> */}
      <PostForm />
    </div>
    );
  }
}
 
export default App;
  
