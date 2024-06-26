import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

const App =()=>{
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route  exact path="/" element={<News key="general" country="in" category="general"></News>}></Route> 
            <Route  exact path="/business" element={<News key="business" country="in" category="business"></News>}></Route> 
            <Route  exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment"></News>}></Route>  
            <Route  exact path="/general" element={<News key="general" country="in" category="general"></News>}></Route> 
            <Route  exact path="/health" element={<News key="health" country="in" category="health"></News>}></Route> 
            <Route  exact path="/science" element={<News key="science" country="in" category="science"></News>}></Route> 
            <Route  exact path="/sports" element={<News key="sports" country="in" category="sports"></News>}></Route> 
            <Route  exact path="/technology" element={<News key="technology" country="in" category="technology"></News>}></Route>
          </Routes> 
        </Router>
      </div>
    )
} 
export default App