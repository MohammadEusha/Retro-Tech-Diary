import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from "./Components/HomePage/Home/Home";
import Login from "./Components/LoginPage/Login/Login";
import PrivateRoute from "./Components/LoginPage/Login/PrivateRoute/PrivateRoute";
import AddAdmin from "./Components/AdminPage/AddAdmin/AddAdmin";
import AddBlogs from "./Components/AdminPage/AddBlogs/AddBlogs";
import BlogManage from "./Components/AdminPage/BlogsManage/BlogManage";


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/home">
            <Home></Home>
          </PrivateRoute>
          <Route path="/addAdmins">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/addBlogs">
            <AddBlogs></AddBlogs>
          </Route>
          <Route path="/manageBlogs">
            <BlogManage></BlogManage>
          </Route>
          <Route path="/">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
