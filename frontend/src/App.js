// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/Home";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import MakePost from "./components/MakePost";
import EditPost from "./components/EditPost";
import ShowChairs  from "./components/Chairs";
import ShowReviews  from "./components/Reviews";
import MakeReview  from "./components/MakeReview";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/chairs">
            <ShowChairs/>
          </Route>
          <Route exact path="/reviews/create/:id">
            <MakeReview />
          </Route>
          <Route path="/reviews/chair/:id">
            <ShowReviews/>
          </Route>
          <Route path="/chair/:id">
            <EditPost />
          </Route>
          <Route path="/create">
            <MakePost />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
