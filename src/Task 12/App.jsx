// import CounterProvider from "./Components/CounterProvider";
// import Counter from "./Components/Counterr";
// import CounterButtons from "./Components/CounterButtons";
// import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import Home from "./Router/Home";
// import About from "./Router/About";
// import Destinations from "./Router/Destinations";
// import Packages from "./Router/Packages";
// import Hotels from "./Router/Hotels";
// import Gallery from "./Router/Gallery";
// import TravelTips from "./Router/TravelTips";
// import Contact from "./Router/Contact";
// import Beaches from "./Router/Beaches";
// import Mountains from "./Router/Mountains";
// import Historical from "./Router/HistoricalPlaces";
// import Wildlife from "./Router/Wildlife";
// import International from "./Router/International";
// import User from "./Components/User";
// import "./App.css"
// import TicTacToe from "./Task/TicTacToe";
// import UserDetails from "./Components/UserDetails";
// import Users from './Components/Users';
// import Users1 from './Components/Users1'
// export default function App() {
//   const display = false
//   return (
//     <div>
//       {display&&(
//         <div><CounterProvider>
//       <div className="app">
//         <Counter />
//         <CounterButtons />
//       </div>
//     </CounterProvider>
//             <TicTacToe />
//     <BrowserRouter>
//     <Routes>
//       <Route path="/users" element={<User/>}/>
//       <Route path="/users/:id" element={<UserDetails/>} />
//     </Routes>
//     </BrowserRouter>
//     <BrowserRouter>
//     <div className="header">
//       <NavLink to={"/Home"}>Home</NavLink>
//       <NavLink to={"/About"}>About</NavLink>
//       <NavLink to={"/Destinations"}>Destinations</NavLink>
//       <NavLink to={"/Packages"}>Packages</NavLink>
//       <NavLink to={"/Hotels"}>Hotels</NavLink>
//       <NavLink to={"/Gallery"}>Gallery</NavLink>
//       <NavLink to={"/TravelTips"}>TravelTips</NavLink>
//       <NavLink to={"/Contact"}>Contact</NavLink>
//       <NavLink to={"/users"}>Users</NavLink>

//     </div>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/Home" element={<Home/>}/>
//       <Route path="/About" element={<About/>}/>
//       <Route path="/Destinations" element={<Destinations/>}>
//       <Route path="Beaches" element={<Beaches/>}/>
//       <Route path="Mountains" element={<Mountains/>}/>
//       <Route path="Historical" element={<Historical/>}/>
//       <Route path="Wildlife" element={<Wildlife/>}/>
//       <Route path="International" element={<International/>}/>
//       </Route>
//       <Route path="/Packages" element={<Packages/>}/>
//       <Route path="/Hotels" element={<Hotels/>}/>
//       <Route path="/Gallery" element={<Gallery/>}/>
//       <Route path="/TravelTips" element={<TravelTips/>}/>
//       <Route path="/Contact" element={<Contact/>}/>
//       <Route path="/users" element={<Users />}/>
//     </Routes>
//     </BrowserRouter>
//     </div>)}
//       <Users1 />
//     </div>
    
//   );
// }
import Users1 from './Users1'

export default function App() {
  return (
    <div>
      <Users1 />
    </div>
  );
}
