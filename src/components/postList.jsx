// HTTP GET request
import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            errorMsg: ''
        }
    }
    // invoke the get method on the axios library
    // this method accepts the API endpoint as its argument
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg:'Something went wrong'})
        })
    }
    
    render() { 
        const {posts, errorMsg} = this.state
        return ( 
        <>
        List of Posts
        {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>) :
            null
        }
        {
            errorMsg ? <div>{errorMsg}</div> :null
        }
        </>
    );
    }
}
 
export default PostList;