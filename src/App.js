import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import cv from "../src/res/CV-FM.pdf"
import pk from "../src/res/Public_Key_Fernando.pem";
import AcercaCrypto from "./pages/AcercaCrypto";

function App() {
  return (
    <Router>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
            <a href={pk} download="Public_Key_Fernando.pem">Llave pública</a>
            </li>
            <li>
              <a href={cv} download="Martinez_Fernando_CV.pdf">CV</a>
            </li>
            <li>
              <Link to="/AcercaCryptografia">Acerca de Criptografía</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <MainContainer />
          </Route>
          <Route exact path="/AcercaCryptografia">
            <AcercaCrypto/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
