import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';


class Posts extends Component {

    //constructor in not used because this.state will be coming from redux
    // constructor(props) {
    //     super(props);
    //     this.state =  {
    //         posts: []
    //     }
    // }
    //transferred to postActions.js in actions using Redux
    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => this.setState({posts: data}));
    // }
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost); //add new post in the top of the list
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                { postItems }
            </div>
        )
    }
}

//prop-types
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

//map state to props
const mapStateToProps = state => ({
    posts: state.posts.items,  //from /reducers index.js
    newPost: state.posts.item
})

//export default Posts;
export default connect(mapStateToProps, { fetchPosts })(Posts);
