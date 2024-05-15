import './App.css'
import { AddPost } from './components/AddPost';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { Sidebar } from './components/Sidebar';
import { usePost } from './store/post-context'

function App() {

  const { currentTab } = usePost();

  return (
    <div className='app-container'>
        <Sidebar />
      <div className='content'>
        <Header />
        {currentTab === 'Home' ? <AddPost /> : <PostList />}
        <Footer />
      </div>
    </div>
  )
}

export default App
