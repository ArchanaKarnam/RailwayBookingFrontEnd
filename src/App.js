import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route,Routes, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import thankyoupage from "./components/thankyoupage.component.js";
import Login from "./components/login.component";
import Register from "./components/register.component";
import booking from "./components/booking.component";
import payment from "./components/payment.component"
import User from "./components/user.component";
import home from "./components/home.component.js";
import TrainList from "./components/TrainList.js"
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import EventBus from "./common/EventBus";
import image from "./images/logo-modified.png"
import cardpayment from "./components/cardpayment.component.js";
import paytm from "./components/paytm.component.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); 
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser} = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand bg-railway-green">
            <Link to={"/"} className="navbar-brand">
            <img src = {image} width="8%" height="80%" ></img>
              Next Destination
            </Link>
            {/* <div className="navbar navbar-nav mr-auto">
              
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    Resource
                  </Link>
                </li>
              )}
            </div> */}

            {currentUser ? (

              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/TrainList"} className="nav-link">
                    Train List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/booking"} className="nav-link">
                    Book Tickets
                  </Link>
                </li>
                
                
                
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (

              
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={home} />
              <Route exact path="/home" component={home}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/booking" component={booking} />
              <Route exact path="/TrainList" component={TrainList} />
              <Route exact path="/user" component={User} />
              <Route exact path="/payment" component={payment}/>
              <Route exact path="/thankyoupage" component={thankyoupage}/>
              <Route exact path="/cardpayment" component={cardpayment}/>
              <Route exact path="/paytm" component={paytm}/>
            </Switch>
          </div>
        </div>
      </Router> 
     
    

    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);