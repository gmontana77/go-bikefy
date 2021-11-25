import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
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
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/booking/:bikeid" exact component={BookingBike} />
        <Route path="/userbookings" exact component={UserBookings} />
        <Route path="/admin/addbike" exact component={AddBike} />
        <Route path="/editbike/:bikeid" exact component={EditBike} />
        <Route path="/admin" exact component={AdminArea} />
      </BrowserRouter>
    </div>
  );
}

export default App;
