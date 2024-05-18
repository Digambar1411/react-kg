import { createContext, useContext, useReducer } from "react";

const PostContext = createContext({postState:[], postDispatch: ()=>{}});

const usePost = () => useContext(PostContext);


const PostContextProvider = ({children}) =>{


  const postReducerFunc =(state, action)=>{
    if(action.type === 'ADD_POST'){
      return [...state, action.payload]
    }

    if(action.type === 'FETCH_POSTS'){
      return action.payload
    }

    else if(action.type === 'DELETE_POST'){
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