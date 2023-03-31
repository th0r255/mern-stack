import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
// Pages & Components 
import Home from './Pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="w-full h-screen m-0 p-16 bg-slate-200">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div> 
  );
}

export default App;
