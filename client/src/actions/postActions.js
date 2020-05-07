import { FETCH_POSTS, NEW_POST } from './types';

// export function fetchPosts(){
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type: FETCH_POSTS,
//             //posts ==> payload comes from the data from the reducer
//             payload: posts
//         }));
//     }
// }

export const fetchPosts = () => dispatch =>{
    console.log('fetching...')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            //posts ==> payload comes from the data from the reducer
            payload: posts
        })
    );
};

export const createPosts = (postData) => dispatch =>{
    console.log('action called from createPosts')
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res=>res.json())
    .then(post =>  dispatch({
        type: NEW_POST,
        //posts ==> payload comes from the data from the reducer
        payload: post
    }));
};