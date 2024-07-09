import logo from './logo.svg';
// import './App.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Theme>
        <Home />




      </Theme>
    </div>
  );
}

export default App;