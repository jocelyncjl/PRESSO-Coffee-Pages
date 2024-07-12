import logo from './logo.svg';
// import './App.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Home from './pages/home'
import CoffeeList from './pages/coffeeList/coffeeList';
import GiftsList from './pages/gifts/gifts';
import About from './pages/about/about';
import Blog from './pages/blog/blog';


function App() {
  return (
    <div className="App">
      <Theme>


        {/* <Home /> */}
        {/* {<CoffeeList/>} */}
        {/* {<GiftsList/>} */}
        {/* {<About/>} */}
        {<Blog/>}



        
        
        




      </Theme>
    </div>
  );
}

export default App;