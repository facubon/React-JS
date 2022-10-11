
import './App.css';
import NavBar from './components/navbar';
import ItemList from './components/shop/ItemList';
import {BrowserRouter,Routes,Route} from "react-router-dom";








function App() {
  return (
    

      <>

      
      

        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route  path={'/shop'} element={<ItemList/>} />
            </Routes>


        </BrowserRouter>
            
          
      </>

    

  
    
    
  );
}

export default App;


