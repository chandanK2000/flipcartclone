// import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material';
import Dataprovider from './context/Dataprovider';
import DetailsViews from './components/details/DetailsViews';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cart from './components/cart/Cart';
import ViewAll from './components/header/ViewAll';
function App() {
  return (
    <Dataprovider>
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop:54}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailsViews />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/viewall" element={<ViewAll />} />
        </Routes>
       
      </Box>
      </BrowserRouter>
    </Dataprovider>

  );
}

export default App;
