import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import FormInput from "./components/Form/FormInput";
import ViewBlood from "./components/ViewBlood/ViewBlood";
import Events from "./components/Event/Events";
import { Switch, Route,Redirect, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">

        <NavBar />

      </div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      
      <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/blood-bank'} component={FormInput} />
          <Route exact path={process.env.PUBLIC_URL + '/blood-bank/ViewBlood'} component={ViewBlood} />
          <Route exact path={process.env.PUBLIC_URL + '/blood-bank/events'} component={Events} />
          <Redirect from="/" to="/blood-bank" />
        </Switch>
      
      
     </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
