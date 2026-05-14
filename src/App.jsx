import React from "react";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";
import DashboardNav from "./components/DashboardNav";
import Dashhboard from "./Pages/Dashhboard";
import NewIdea from "./Pages/NewIdea";
import IdeaDetail from "./Pages/IdeaDetail";
import Notification from "./Pages/Notification";
import Board from "./Pages/Board";
import Profile from "./Pages/Profile";

const App = () => {
  let token = localStorage.token;

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashhboard" element={<Dashhboard />} />
        <Route path="/newidea" element={<NewIdea />} />
        <Route path="/idea/:id" element={<IdeaDetail />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
};

export default App;
