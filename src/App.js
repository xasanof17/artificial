import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from './components';
import {About, Error, Home} from "./Routes";

// figma.com/file/yOsaxes5hokPaavTsSezDj/Artificial-Intelligence-(Copy)?node-id=2%3A6

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={< Home />}/>
                    <Route path="about" element={< About />}/>
                    <Route path="*" element={< Error />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
