import {FETCH_POSTS, ADD_POST} from "./types";

export  const  fetchPosts=()=>dispatch=>{

    fetch('http://localhost:8080/posts')
        .then(res=> res.json())
        .then(posts=>dispatch({

            type:FETCH_POSTS,
            payload:posts

        }));

};

export const addPost=(postData)=>dispatch=>{


    fetch('http://localhost:8080/posts',{

        method:'POST',
        headers:{

            'content-type': 'Application/json'
        },
        body: JSON.stringify(postData)
    }).then(res=> res.json())
        .then(post=>dispatch({

            type:ADD_POST,
            payload:post
        }));


};