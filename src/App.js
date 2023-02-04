import { Routes, Route } from 'react-router-dom'
import Header from './components/Abstract/Header'
import Follower from './components/Pages/Follower'
import Home from './components/Pages/Home'
import Following from './components/Pages/Following'
import Story from './components/Pages/Story'
import ErrorPage from './components/Pages/ErrorPage'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/follower' element={<Follower />} />
        <Route exact path='/following' element={<Following />} />
        <Route exact path='/story/:id' element={<Story />} />
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
