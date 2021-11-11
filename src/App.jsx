import MainPage from "./pages/MainPage.jsx";
// import MainPage2 from "./pages/MainPage2.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
