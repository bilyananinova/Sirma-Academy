import { Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import Posts from './components/Posts';
import PostDetails from "./components/PostDetails";
import CreatePost from './components/CreatePost';
import PostEdit from "./components/PostEdit";
import UserPosts from './components/UserPosts';
import Contacts from './components/Contacts';
import Login from "./components/Login";
import Register from './components/Register';

import { AuthContextProvider } from "./contexts/AuthContext";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App() {

  return (
    <>

      <AuthContextProvider>

        <Header />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/posts/edit/:id' element={<PostEdit />} />
          <Route path='/posts/add' element={<CreatePost />} />
          <Route path='/posts/user/:id' element={<UserPosts />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>

      </AuthContextProvider>
    </>
  );
}

