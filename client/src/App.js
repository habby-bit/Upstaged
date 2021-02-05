import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import FooterNav from './components/Footer';
import Profile from './components/Profile';
import Quizzes from "./components/Quizzes/Quizzes"
import MainPage from './pages/MainPage';
import Hamilton from "./components/Quizzes/Hamilton"


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* <Profile /> */}
        <FooterNav/>
        <Switch>
          <Route exact path={"/Profile"}>
            <Profile />
            <h1>TEST</h1>
          </Route>
          <Route exact path={"/Quizzes"}>
            <Quizzes />
          </Route>
          <Route exact path={"/Hamilton"}>
            <Hamilton />
          </Route>
          {/* <Route exact path={"/Wicked"}>
            <Wicked/>
          </Route>
          <Route exact path={"/Dreamgirls"}>
            <Dreamgirls/>
          </Route>
          <Route exact path={"/Phantom"}>
            <Phantom/>
          </Route>
          <Route exact path={"/Rent"}>
            <Rent/>
          </Route>
          <Route exact path={"/Heathers"}>
            <Heathers/>
          </Route>
          <Route exact path={"/LesMis"}>
            <LesMis/>
          </Route>
          <Route exact path={"/DearEvanHansen"}>
            <DearEvanHansen/>
          </Route>
          <Route exact path={"/SweeneyTodd"}>
            <SweeneyTodd/>
          </Route>
          <Route exact path={"/Hadestown"}>
            <Hadestown/>
          </Route> */}
        </Switch>

      </div>
    </Router>
    );
  }
}

export default App;
