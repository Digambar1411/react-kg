import { useEffect, useState } from "react";
import { usePost } from "../store/post-context"
import { MdDelete } from "react-icons/md";

export const PostList = () => {

  const { postState, postDispatch } = usePost();
  const [loading, setLoading]= useState();

  const fetchPost = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(res => postDispatch(
      {
        type: 'FETCH_POSTS',
        payload: res.posts
      }
    ));
  }

  useEffect(()=>{fetchPost()},[]);

 
  return (

    < div className="post-container">
      {postState.length > 0 && <div className="ml-3">TotalPosts are {postState.length}</div>}
      {postState.map(post =>
        <div className="card" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            {post.tags.map(tag => <span className="badge text-bg-primary mr-3">{tag}</span>)}
            <button class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle" 
              onClick={() => {
                postDispatch(
                {
                  type: 'DELETE_POST',
                  payload: { id: post.id }
                })
              }}
            >
              <MdDelete />
            </button>
            <div class="alert alert-info mt-3" role="alert">
              This post has reached by {post.reactions} people.
            </div>
          </div>
        </div>
      )}
    </div>

  )
}