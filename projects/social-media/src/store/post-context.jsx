import { createContext, useContext, useState } from "react";

const PostContext = createContext();

const usePost = () => useContext(PostContext);


const PostContextProvider = ({children}) =>{

  const [currentTab, setCurrentTab] = useState('Home');

  return(
    <PostContext.Provider value={
      {
        currentTab,
        setCurrentTab
      }
    }>
      {children}
    </PostContext.Provider>
  )
}

export { usePost, PostContextProvider}