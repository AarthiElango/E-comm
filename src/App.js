import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51O1U5XSHuh5ZHESTdmgHFjAGG34PoVZ6kYEvDa6kmBohhPT078gAEQW8LoxwI7TpYk5dQpU4xClHvNewzDQMEMXQ00XVxXpA08"
  
);

function App() {
    
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

 return  (
    <BrowserRouter>
    <Routes>
    <Route path="Login" element={<Login/>} />    
    <Route path="Checkout" element={<Checkout/>} /> 
    <Route path="Payment" element={<payment/>} />    
          
    <Route path="/" element={<Home/>}>
    <Route path="Header" element={<Header/>} />
    
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}
export default App;