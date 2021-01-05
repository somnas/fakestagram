import {Switch, Route} from 'react-router-dom';
import './App.css';
import NavLinkItem from './components/NavLinkItem';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ImageListPage from './pages/ImageListPage';

function App() {
  return (
    <div className="container">
     <div className="row">
       <div className="col-md-12">
        <h1>Fakestagram</h1>        
       </div>      
     </div>  
      <div className="row">
        <div className="col-md-12">
          <ul className="nav">
            <NavLinkItem to="/" text="Home"/>
            <NavLinkItem to="/instagram" text="Instagram" />
            <NavLinkItem to="/about" text="About"/>
            <NavLinkItem to="/contact" text="Contact"/>
          </ul>  
        </div> 
      </div>   
     <Switch>
       <Route path="/instagram">
        <ImageListPage />
       </Route>
       <Route path="/about">
         <AboutPage/>
       </Route>
       <Route path="/contact">
        <ContactPage/>
       </Route>
       <Route path="/">
        <HomePage greeting="hej"/>
       </Route>       
     </Switch>
    </div>
  );
}

export default App;
