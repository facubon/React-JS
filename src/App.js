
import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/shop/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";








function App() {
  return (
    

      <>

      
      

        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route  path={'/shop'} element={<ItemListContainer/>} />
            </Routes>


        </BrowserRouter>
            
          
      </>

    

  
    
    
  );
}

export default App;


