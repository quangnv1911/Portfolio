import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import RightNavbar from './components/RightNavbar';
import { FaLightbulb } from "react-icons/fa";
function App() {


  return (
    <Router>

      <div className='App bg-black h-full text-white text-center relative'>
        <div className='fixed right-4 top-[25px] 
        rounded-full bg-[#2b2a2a] flex justify-center items-center  w-[50px] h-[50px]
        hover:cursor-pointer z-[9999]
        '>
          <FaLightbulb />
        </div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>

        <div className='fixed right-4 -translate-y-1/2 top-1/2 '>
          <RightNavbar />
        </div>

      </div>
    </Router>
  );
}

export default App;
