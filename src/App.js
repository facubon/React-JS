
import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/shop/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ItemDetail from './components/shop/ItemDetail';
import Home from './components/home';
import { DarKmodeContext } from './components/context/DarkmodeContext';
import BotonDarkmode from './components/botonDarKmode';
















function App() {
  return (
    

    
        <DarKmodeContext.Provider value={true} > 
        <BrowserRouter>
            <BotonDarkmode/>
            <NavBar/>
            <Routes>
              <Route  exact path={'/'} element={<Home/>}/>
              <Route  path={'/shop'} element={<ItemListContainer/>} />
              <Route  path={'/shop/item/:id'} element={<ItemDetail/>}/>
            </Routes>
            
           
        </BrowserRouter>
        </DarKmodeContext.Provider>
      

  );
}

export default App;


