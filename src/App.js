import logo from './logo.svg';
// import './App.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Home from './pages/home/index'
import CoffeeList from './pages/coffeeList/coffeeList';
import GiftsList from './pages/gifts/gifts';
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import CartList from './pages/cart/cart';
import RegisterForm from './pages/register/register';
import SignInForm from './pages/signIn/signIn';



import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Theme>
          {/* <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/coffee-list' element={<CoffeeList/>}/>
            <Route path='/gifts' element={<GiftsList/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
          </Routes> */}
          {/* <CartList/> */}
          {/* <RegisterForm/> */}
          {<SignInForm/>}

          



        </Theme>
      </div>
    </Router> 
  );
}

export default App;