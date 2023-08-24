import "./App.css";
import Navbar from "./components/Navbar";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routing for Homescreen */}
          <Route path="/" element={<Homescreen />} />
          {/* Routing for Admin login page */}
          <Route path="/adminlogin" element={<Adminlogin />} />
          {/* Routing for User login page */}
          <Route path="/userlogin" element={<Loginscreen />} />
          {/* Routing for User screen */}
          <Route path="/user" element={<Userscreen />} />
          {/* Routing for Admin screen */}
          <Route path="/admin" element={<Adminscreen />} />
          {/* Routing for new admin registration */}
          <Route path="/register" element={<Registerscreen />} />
          {/* Routing for viewing a particular student ticket details */}
          <Route path="/admin/view/:id" element={<Adminview />} />
          {/* Routing for changing the admin password */}
          <Route path="/admin/changepwdadmin" element={<Changepwdadmin />} />
          {/* Routing for changing the user password */}
          <Route path="/user/changepwduser" element={<Changepwduser />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
