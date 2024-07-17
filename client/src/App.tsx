import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Resume from "./pages/Resume";
import Template from "./pages/Template";
import Document from "./pages/Document";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/temp" element={<Template />} />
        <Route path="/doc" element={<Document />} />
      </Routes>
    </div>
  );
}

export default App;
