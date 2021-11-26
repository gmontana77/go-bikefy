import "./App.css";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingBike from "./pages/BookingBike";
import UserBookings from "./pages/UserBookings";
import "antd/dist/antd.css";
import AddBike from "./pages/AddBike";
import EditBike from "./pages/EditBike";
import AdminArea from "./pages/AdminArea";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProtectedRoute path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <ProtectedRoute path="/booking/:bikeid" exact component={BookingBike} />
        <ProtectedRoute path="/userbookings" exact component={UserBookings} />
        <ProtectedRoute path="/admin/addbike" exact component={AddBike} />
        <ProtectedRoute path="/editbike/:bikeid" exact component={EditBike} />
        <ProtectedRoute path="/admin" exact component={AdminArea} />
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("user")) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}
