import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import  Nav  from "react-bootstrap/Nav";

function App() {
  return (

    <div style={{backgroundColor: 'antiquewhite'}}>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand >Warzywniak</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbar">
                <ul className="navbar-nav">
                  <li>
                    <Link className="nav-link" to={"/"}>
                      Lista produktów
                    </Link>
                  </li>
                  <li>
                      <Link className="nav-link" to={"/add"}>
                        Dodawanie produktów
                      </Link>
                  </li>
                </ul>
                
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      
        <div className="container mt-5  text-center"> 
          <h2>Mój sklep</h2>                  
            <Routes>
              <Route
              exact 
              path="/" 
              component={ProductsList} 
              element={<ProductsList />}
              />
              <Route 
              exact 
              path="/add" 
              component={AddProduct} 
              element={<AddProduct />}
              />  
            </Routes>
        </div>
    </div>
  );
}

export default App;



