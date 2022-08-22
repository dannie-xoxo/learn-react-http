// HTTP POST REQUEST
import React, { Component } from 'react';
import axios from 'axios'

class PostForm extends Component {
   
        constructor(props) { //(1)
            super(props);
            this.state = {
                userid: '',
                title: '',
                body: ''
            }
        }
        changeHandler = (event) => {
            this.setState({[event.target.name]:event.target.value})
        }
        submitHandler= (event) => {
            event.preventDefault()
            console.log(this.state) // HTTP POST REQUEST
            axios.post('https://jsonplaceholder.typicode.com/posts',this.state) //  (4) data to be posted
            .then(response => {
                console.log(response)
            })
            .catch (error => {
                console.log(error)
            })
        }
    render() { 
        const {userid, title, body} = this.state // (2)
        return (
            <>
            <form onSubmit={this.submitHandler}>
        <div>
            <input type='text' name='userid' value={userid} onChange= {this.changeHandler} />// (3)
         </div>
           <div>
            <input type='text' name='title' value={title} onChange= {this.changeHandler}/>
           </div>
        <div>
            <input type='text' name='body' value={body} onChange= {this.changeHandler}/>
        </div>
              <button type='submit'>Submit</button>  
            </form>
            </>
        );
    }
}
 
export default PostForm ;
/*
- create state properties and link them back to the input elements
- destructure them in the render method and add thier values
to the value attributes of the input elements.
- add the onchange handlers to track the changes in the input values
and keep them in sync with the state object.
- the axios. post goes into the submit handler
 the post method takes in a second argument which is the the data
 to be sent {this.state}*/