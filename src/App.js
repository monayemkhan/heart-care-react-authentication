import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Contact from './Pages/Contact/Contact';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login/Login';
import PrivateRoute from './Pages/Shared/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  return (
    
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route path="/Services">
              <Services></Services>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route  path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    
  );
}

export default App;
