import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import AccountPage from "./components/Account/AccountPage";
import LearnPage from "./components/Learn/LearnPage";
import Games from "./components/Learn/Sections/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Account" element={<AccountPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Learn" element={<LearnPage />} />
        <Route path="/Learn/Games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
