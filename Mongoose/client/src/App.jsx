import { Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from '../contexts/AuthContext';

import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import PostDetails from './components/PostDetails';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<PostDetails />} />
          <Route path="/blog/:id/edit" element={<EditPost />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </AuthContextProvider>
    </>
  )
}