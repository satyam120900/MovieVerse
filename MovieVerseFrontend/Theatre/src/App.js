import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/LandingPageComponent/HomePage';
import Login from './component/LoginComponent/Login';
import SignUp from './component/SignUpComponent/SignUp';
import Home from "./component/HomeComponent/Home";
import Profile from "./component/ProfileComponent/Profile";
import AddMovie from './component/AddMovieComponent/AddMovie';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<HomePage props={'/'}/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp></SignUp>}/>
        <Route path="/*" element={<Home></Home>}/>
        <Route path="/profile" element={<Profile></Profile>}/>
        <Route path="/addMovie" element={<AddMovie></AddMovie>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
