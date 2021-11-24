import './App.css';
import {Route , BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingBike from './pages/BookingBike'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
         
         <BrowserRouter>
             
             <Route path='/' exact component={Home} />
             <Route path='/login' exact component={Login} />
             <Route path='/register' exact component={Register} />
             <Route path='/booking/:bikeid' exact component={BookingBike} />
         
         </BrowserRouter>

    </div>
  );
}

export default App;
 