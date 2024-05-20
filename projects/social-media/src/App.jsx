import { useState } from 'react';
import './App.css'
import { AddPost } from './components/AddPost';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { Sidebar } from './components/Sidebar';

function App() {

  const [currentTab, setCurrentTab] = useState('Home');


  return (
    <div className='app-container'>
        <Sidebar 
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab}
        />
      <div className='content'>
        <Header />
        {currentTab === 'Home' ? <PostList /> : <AddPost />}
        <Footer />
      </div>
    </div>
  )
}

export default App
