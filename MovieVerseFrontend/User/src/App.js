import './App.css';
import HomePage from './components/LandingPageComponent/HomePage';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './components/LoginComponent/Login';
import SignUp from './components/SignUpComponent/SignUp';
import Home from './components/HomeComponent/Home';
import MovieDetail from './components/MovieDetailComponent/MovieDetail';
import TheatreList from './components/TheatreComponent/TheatreList';
import SeatBooking from './components/SeatBookingComponent/SeatBooking';
import Profile from './components/ProfileComponent/Profile';
import Tickets from './components/TicketsComponent/Tickets';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage props={'/'}/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/*" element={<Home />}/>
        <Route path="/movieDetail/:id" element={<MovieDetail />}/>
        <Route path="/theatreList/:id" element={<TheatreList></TheatreList>}></Route>
        <Route path="/seats/:id/:id_2/:id_3" element={<SeatBooking></SeatBooking>}/>
        <Route path="/profile" element={<Profile></Profile>}/>
        <Route path="/tickets" element={<Tickets></Tickets>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
