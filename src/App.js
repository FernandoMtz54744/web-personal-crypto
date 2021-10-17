import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <Router>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Acerca de mí</Link>
            </li>
            <li>
              <Link to="/key">Llave pública</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <Link to="/">Acerca de Criptografía</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
