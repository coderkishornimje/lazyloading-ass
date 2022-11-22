
import './App.css';
//import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPage from './components/Navbar';
import { lazy, Suspense } from 'react';

const Home =lazy(()=>import('./components/Home'));

function App() {
  return (
    <div className="App">

     <NavbarPage/>
     
     <Suspense fallback={<div><h2>Page is Loading...</h2></div>}>
     <Home loading="lazy()"/>
     </Suspense>
    </div>
  );
}

export default App;
