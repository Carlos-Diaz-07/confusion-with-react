import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante ConFusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
