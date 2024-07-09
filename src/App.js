import logo from './logo.svg';
// import './App.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Home from './pages/home'
import CoffeeList from './pages/coffeeList/coffeeList';


function App() {
  return (
    <div className="App">
      <Theme>

        
        {/* <Home /> */}
        {<CoffeeList/>}
        
        




      </Theme>
    </div>
  );
}

export default App;