import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
