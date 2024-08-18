import { Routes, Route } from 'react-router-dom';

import NavBar from './components/common/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Login from './components/Login'
import MyAccount from './components/MyAccount'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import Footer from './components/common/Footer'
import AuthContextProvider from './context/AuthContext';


function App() {

  return (
    <>

    <AuthContextProvider>

    
      <NavBar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login-register' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/product-list' element={<ProductList />} />

      </Routes>

      <Footer />

      </AuthContextProvider>
    </>
  )
}

export default App
