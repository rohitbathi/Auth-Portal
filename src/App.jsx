import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={
                            localStorage.getItem("userToken") ? Home : Login
                        }
                    />
                    <Route path="/Register" component={Register} />
                    <Route
                        path="/Home"
                        component={
                            localStorage.getItem("userToken") ? Home : Login
                        }
                    />
                    <Route
                        path="/Edit Profile"
                        exact
                        component={
                            localStorage.getItem("userToken") ? Profile : Login
                        }
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
