import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TeamPage from "./pages/teampage";

function App() {
  const [users, setUsers] = useState([]);

  const fetchAPI = async () => {
    // gets the /api from our server, and sets the object to the array we just initialized. In our project we might want [teams], [users], [matches], etc.
    const response = await axios.get(
      "https://misterb-dynasty-server.onrender.com/api"
    );
    setUsers(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home users={users} />} />
          <Route path="/team/:user" element={<TeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
