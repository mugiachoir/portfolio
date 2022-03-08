import React,{useRef,useState,lazy,Suspense} from "react";
import './App.css';
import { Route, Routes} from "react-router-dom";

import Navigation from './components/navigation/navigation.component';
// import Home from './pages/home/home.page';
// import StokWare from "./pages/stokware/stokware.page";
// import Aspire from "./pages/aspire/aspire.page";
// import Salus from "./pages/salus/salus.page";
// import Xmas from "./pages/xmas/xmas.page";
// import Rfidiom from "./pages/rfidiom/rfidiom.page";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const Home = lazy(() => import('./pages/home/home.page'));
const StokWare = lazy(() => import("./pages/stokware/stokware.page"));
const Aspire = lazy(() => import('./pages/aspire/aspire.page'));
const Salus = lazy(() => import('./pages/salus/salus.page'));
const Xmas = lazy(() => import('./pages/xmas/xmas.page'));
const Rfidiom = lazy(() => import('./pages/rfidiom/rfidiom.page'));

function App() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const serviceRef = useRef();
  const galleryRef = useRef();
  const navRef=useRef({heroRef,aboutRef,projectRef,contactRef,serviceRef,galleryRef});

  

  const [navClicked, setNav] = useState('home');
  const [navigation,setNavigation]=useState('/');

  return (
    <div className="App">
      <Navigation url={navigation} ref={navRef} nav={navClicked} setNav={setNav} />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home ref={navRef} setNavigation={setNavigation} />} />
            <Route exact path="/stokware" element={<StokWare setNav={setNav} setNavigation={setNavigation} />} />
            <Route exact path="/aspire" element={<Aspire setNav={setNav} setNavigation={setNavigation} />} />
            <Route exact path="/salus" element={<Salus setNav={setNav} setNavigation={setNavigation} />} />
            <Route exact path="/xmas" element={<Xmas setNav={setNav} setNavigation={setNavigation} />} />
            <Route exact path="/rfidiom" element={<Rfidiom setNav={setNav} setNavigation={setNavigation} />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
} 

export default App;
