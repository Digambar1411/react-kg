import { createContext, useContext, useReducer, useState } from "react";

const PostContext = createContext();

const usePost = () => useContext(PostContext);


const PostContextProvider = ({children}) =>{


  const postReducerFunc =(state, action)=>{
    if(action.type === 'ADD_POST'){
      console.log(action);
      return [...state, {
        title: action.payload.title,
        body: action.payload.body,
        likes: action.payload.likes,
        id: action.payload.id
      }]
    }

    if(action.type === 'DELETE_POST'){
      return state.filter(post => post.id !== action.payload.id);
    }
  }

  const [postState, postDispatch] = useReducer(postReducerFunc, []);

  return(
    <PostContext.Provider value={
      {
        postState,
        postDispatch,
      }
    }>
      {children}
    </PostContext.Provider>
  )
}

export { usePost, PostContextProvider}