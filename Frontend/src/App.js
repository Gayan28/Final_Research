import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./protectedRoutes";
import LocationForm from "./pages/LocationForm";
import LocationDropdown from "./pages/LocationDropdown";
import Logout from "./components/Logout";
import Checkwarning from "./pages/Checkwarning";
import UserDetails from "./pages/UserDetails";

import AccountSetup from "./pages/AccountSetup";
import CheckAccup from "./pages/CheckAccup";
import Notifications from "./pages/Noftifications";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Homepage} />
        <Route exact path="/login" Component={Login} />
        <Route exat path="/signup" Component={Signup} />
      </Routes>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/warnings" element={<Checkwarning />} />
          <Route exact path="/freefood" Component={LocationForm} />
          <Route exact path="/locshow" Component={LocationDropdown} />
          <Route exact path="/checkaccup" Component={UserDetails} />
        </Route>
          <Route exact path="/logout" Component={Logout} />
        
      </Routes>
    </Router>
  );

  //   <BrowserRouter>

  //   <Route path="/" component={Frontpage} exact />
  //   <Route path="/home" component={HomePage} />
  //   <Route path="/about" component={AboutPage} />

  //   <Route
  //     path="/admin"
  //     render={({ match: { url } }) => (
  //       <>
  //         <Route path={`${url}/`} component={Backend} exact />
  //         <Route path={`${url}/home`} component={Dashboard} />
  //         <Route path={`${url}/users`} component={UserPage} />
  //       </>
  //     )}
  //   />

  // </BrowserRouter>
}

export default App;
