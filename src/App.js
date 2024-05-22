// import logo from './logo.svg';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import store from './Store/store';
import Feedback from './pages/Feedback';
import DarkModeToggle from './Components/DarkModeToggle';
function App() {
  //we can do prop drilling of cart here
  return (
    <div className="App">
      <Provider store={store}> {/*via this we can inject the store*/}
        <Router>
          <Navbar />
          <Routes>

            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/feedback" element={<Feedback />}/>

        </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
