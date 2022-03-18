import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import HelloWorld from './components/HelloWorld';
import Labs from './components/Labs';
import HomeScreen from './components/Tuiter/HomeScreen/index.js'
import ExploreScreen from './components/Tuiter/ExploreScreen/index.js'

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './index.css'
import Tuiter from "./components/Tuiter";

const Navigation = () => {
  return (
    <>
      <Link to='/hello' className='d-block'>HelloWorld</Link>
      <Link to='/labs' className='d-block'>Labs</Link>
      <Link to='/tuiter/' className='d-block'>Tuiter</Link>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Navigation />} />
            <Route path="labs" element={<Labs />} />
            <Route path="hello" element={<HelloWorld />} />
            <Route path="tuiter" element={<Tuiter />}>
              <Route index element={<HomeScreen />} />
              <Route path="explore" element={<ExploreScreen />} />
              {/* <Route path="notifications" element={<NotificationScreen />} /> */}
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
