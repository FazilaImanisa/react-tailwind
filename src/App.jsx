import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Beranda from "./pages/Beranda";
import Gallery from './pages/Gallery';
import Hari from "./pages/Hari";

function App() {
  return (
    <div className="">
      <div className="min-h-screen bg-gray-200">
        <div className="bg-sky-500 px-6 py-2 shadow-lg font-bold text-white">
          <Link className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 hover:text-gray-800 transition-all ease-in-out" to= "/">Beranda</Link>
          <Link className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 hover:text-gray-800 transition-all ease-in-out" to= "/Gallery">Gallery</Link>
          <Link className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 hover:text-gray-800 transition-all ease-in-out" to= "/Hari">Hari Besar</Link>
        </div>
        <div className="mx-12 px-8 py-6 bg-white shadow">
        <Routes>
          <Route path="/" element={<Beranda />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Hari" element={<Hari />}></Route>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;