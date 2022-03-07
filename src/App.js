import { BrowserRouter, Route, Link } from "react-router-dom";

import HelloWorld from './components/HelloWorld';
import Labs from './components/Labs';
import HomeScreen from './components/Tuiter/HomeScreen/index.js'
import ExploreScreen from './components/Tuiter/ExploreScreen/index.js'

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './index.css'

const Navigation = () => {
  return (
    <>
      <Link to='/hello' className='d-block'>HelloWorld</Link>
      <Link to='/labs' className='d-block'>Labs</Link>
      <Link to='/tuiter/home' className='d-block'>Tuiter Home</Link>
      <Link to='/tuiter/explore' className='d-block'>Tuiter Explore</Link>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" exact={true} component={Navigation} />
        <Route path="/hello" exact={true} component={HelloWorld} />
        <Route path="/labs" exact={true} component={Labs} />
        <Route path="/tuiter/home" component={HomeScreen} />
        <Route path="/tuiter/explore" component={ExploreScreen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
