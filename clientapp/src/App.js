import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Welcome from "./components/Welcome";
import MenuDigital from "./components/MenuDigital.js";
import DetallePlatillo from "./components/DetallePlatillo";
import Orden from "./components/Orden";
import Estatus from "./components/Estatus";
import NoMatch  from "./components/NoMatch";

import RestauranteState from "./context/restaurantes/restauranteState";
import MesaState from "./context/mesas/mesasState";
import MenuState from "./context/menus/menusState";
import SeccionState from "./context/secciones/seccionesState";
import PlatillosState from "./context/platillos/platillosState";
import SesionGeneralState from "./context/sesionesGenerales/sesionGeneralState";
import SesionIndividualState from "./context/sesionesIndividuales/sesionIndividualState";
import OrdenState from "./context/ordenes/ordenState";
import PlatilloOrdenadoState from "./context/platillosOrdenados/platilloOrdenadoState";

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <RestauranteState>
      <MesaState>
        <MenuState>
          <SeccionState>
            <PlatillosState>
              <SesionGeneralState>
                <SesionIndividualState>
                  <OrdenState>
                    <PlatilloOrdenadoState>
                      <Router>
                        <Switch>
                          <Route
                            path="/:restauranteQR/:mesaQR"
                            component={Welcome}
                          />
                          <Route
                            exact
                            path="/MenuDigital"
                            component={MenuDigital}
                          />
                          <Route
                            exact
                            path="/DetallePlatillo"
                            component={DetallePlatillo}
                          />
                          <Route exact path="/Orden" component={Orden} />
                          <Route exact path="/Estatus" component={Estatus} />
                          <Route path="*"><NoMatch></NoMatch></Route>
                        </Switch>
                      </Router>
                    </PlatilloOrdenadoState>
                  </OrdenState>
                </SesionIndividualState>
              </SesionGeneralState>
            </PlatillosState>
          </SeccionState>
        </MenuState>
      </MesaState>
    </RestauranteState>
  );
}

export default App;
