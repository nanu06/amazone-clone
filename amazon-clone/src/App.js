import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=> {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
    return () => {
      // any clean up operations go here
      unsubscribe();
    }
  }, []);

  console.log('user is: ', user);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      ></Route>
      <Route
        exact
        path="/checkout"
        element={
          <>
            {" "}
            <Header />
            <Checkout />
          </>
        }
      ></Route>
      <Route
        exact
        path="/login"
        element={
          <>
            <Login />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
