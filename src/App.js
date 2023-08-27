import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import Userscreen from "./screens/Userscreen";
import Adminscreen from "./screens/Adminscreen";
import Registerscreen from "./screens/Registerscreen";
import Adminview from "./screens/Adminview";
import Adminlogin from "./screens/Adminlogin";
import Changepwdadmin from "./screens/Changepwdadmin";
import Changepwduser from "./screens/Changepwduser";
import Userviewprofile from "./screens/Userviewprofile";
import Adminviewprofile from "./screens/Adminviewprofile";
import About from "./screens/About";
import Contactus from "./screens/Contactus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routing for Homescreen */}
          <Route path="/" element={<Homescreen />} />
          {/* Routing for About Us */}
          <Route path="/about" element={<About />} />
          {/* Routing for Contact Us */}
          <Route path="/about/contact-us" element={<Contactus />} />
          {/* Routing for Admin login page */}
          <Route path="/adminlogin" element={<Adminlogin />} />
          {/* Routing for User login page */}
          <Route path="/userlogin" element={<Loginscreen />} />
          {/* Routing for User screen */}
          <Route path="/user/:prn" element={<Userscreen />} />
          {/* Routing for Admin screen */}
          <Route path="/admin/:id" element={<Adminscreen />} />
          {/* Routing for new admin registration */}
          <Route path="/register" element={<Registerscreen />} />
          {/* Routing for viewing a particular student ticket details */}
          <Route path="/admin/view/:id" element={<Adminview />} />
          {/* Routing for changing the admin password */}
          <Route
            path="/admin/:id/change-admin-password"
            element={<Changepwdadmin />}
          />
          {/* Routing for changing the user password */}
          <Route
            path="/user/:prn/change-user-password"
            element={<Changepwduser />}
          />
          {/* Routing for showing the profile of the user */}
          <Route
            path="/user/:prn/view-user-profile"
            element={<Userviewprofile />}
          />
          {/* Routing for showing the profile of the admin */}
          <Route
            path="/admin/:id/view-admin-profile"
            element={<Adminviewprofile />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
