import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes";
import './App.css';


function App() {
  return (
    <Router>
        <Routes>
          {publicRoutes.map((publicRoute,i) => {
            return <Route exact={publicRoute.exact} key={i} path={publicRoute.link} element={<publicRoute.component/>} />
          })}
        </Routes>
    </Router>
  );
}

export default App;
