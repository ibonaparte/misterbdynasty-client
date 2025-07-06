import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import TeamHeader from "../components/TeamHeader";
import Results from "../components/Results";
import "../styles/TeamPage.css";
import Layout from "../layouts/Layout";

const TeamPage = () => {
  let params = useParams();
  const [user, setUser] = useState([]);
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const thisUser = params.user;

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get("https://misterb-dynasty-server.onrender.com/api");
      setUser(response.data.users.find((obj) => obj.username === thisUser));
      setTeams(response.data.teams);
    };

    fetchAPI();
  }, [thisUser]);

  useEffect(() => {
    if (user && user.current_team) {
      const fetchMatches = async () => {
        const response = await axios.get(
          `https://misterb-dynasty-server.onrender.com/api/matches/${user.current_team}`
        );
        setMatches(response.data);
      };

      fetchMatches();
      setLoading(false);
    }
  }, [user]);

  return (
    <Layout>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TeamHeader user={user} />
          <Results matches={matches} teams={teams} user={user} />
        </>
      )}
    </Layout>
  );
};

export default TeamPage;
