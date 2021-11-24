import "./App.css";
import "./App.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/footer";
import FormLoan from "./components/formLoan";
import PaymentNasabah from "./components/paymentNasabah";
import Navbar from "./components/Navbar.jsx";
import MeetupSummary from "./components/meetupSummary";
import MeetupCreate from "./components/meetupCreate";
import PrivateRoute from "./components/privateRoute";

import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn";
import ListNasabah from "./pages/ListNasabah";
import NasabahHistory from "./pages/NasabahHistory";
import DashboardCO from "./pages/dashboardCO";
import Community from "./pages/community";
import DetailNasabah from "./pages/detailNasabah";
import SignOut from "./pages/signout.jsx";
import CommunityTransaction from "./pages/CommunityTransaction";

function App() {
    return (
        <div className="App">
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/signin">
                    <SignIn />
                </Route>

                <PrivateRoute path="/communityOfficer">
                    <div>
                        <DashboardCO />
                    </div>
                </PrivateRoute>

                <PrivateRoute path="/community">
                    <div>
                        <Community />
                    </div>
                </PrivateRoute>

                <PrivateRoute path="/detailNasabah">
                    <div>
                        <DetailNasabah />
                    </div>
                </PrivateRoute>

                <PrivateRoute path="/formLoan">
                    <div>
                        <FormLoan />
                    </div>
                </PrivateRoute>

                <PrivateRoute path="/paymentNasabah">
                    <div>
                        <PaymentNasabah />
                    </div>
                </PrivateRoute>

                <PrivateRoute path="/list">
                    <ListNasabah />
                </PrivateRoute>

                <PrivateRoute path="/history">
                    <NasabahHistory />
                </PrivateRoute>

                <PrivateRoute path="/signout">
                    <SignOut />
                </PrivateRoute>

                <PrivateRoute path="/meetupSummary/">
                    <div>
                        <MeetupSummary />
                    </div>
                </PrivateRoute>

                <PrivateRoute path="/meetupCreate/">
                    <div>
                        <MeetupCreate />
                    </div>
                </PrivateRoute>

                <PrivateRoute path="/communityTransaction">
                    <CommunityTransaction />
                </PrivateRoute>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
