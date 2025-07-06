import { useState } from "react";
import axios from "axios";

const NewMatch = () => {
  //initialize the form state
  const [form, setForm] = useState({
    season_id: "",
    week_id: "",
    away_id: "",
    home_id: "",
    away_score: "",
    home_score: "",
    away_rank: "",
    home_rank: "",
    game_type: "",
    game_name: "",
  });

  //update the form everytime input is changed
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //POST the new match on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/matches", form);
      alert(`Match added with ID: ${res.data.id}`);
    } catch (err) {
      alert("Error submitting form");
      console.log(err);
    }
  };

  return (
    <>
      <h1>New Match Entry</h1>
      <form className="new-match-form" onSubmit={handleSubmit}>
        <label htmlFor="season_id">
          Season:
          <select onChange={handleChange} name="season_id" id="season_id">
            <option value="5">CFB 25 Season 5</option>
            <option value="4">CFB 25 Season 4</option>
            <option value="3">CFB 25 Season 3</option>
            <option value="2">CFB 25 Season 2</option>
            <option value="1">CFB 25 Season 1</option>
          </select>
        </label>

        <label htmlFor="week_id">
          Week:
          <input
            type="text"
            onChange={handleChange}
            name="week_id"
            id="week_id"
          />
        </label>

        <label htmlFor="away_id">
          Away Team:
          <select onChange={handleChange} name="away_id" id="away_id">
            <option value="43">TCU Horned Frogs</option>
            <option value="1">Boston College</option>
          </select>
        </label>

        <label htmlFor="away_score">
          Away Score:
          <input
            type="text"
            onChange={handleChange}
            name="away_score"
            id="away_score"
          />
        </label>

        <label htmlFor="home_id">
          Home Team:
          <select onChange={handleChange} name="home_id" id="home_id">
            <option value="43">TCU Horned Frogs</option>
            <option value="1">Boston College</option>
          </select>
        </label>

        <label htmlFor="home_score">
          Home Score:
          <input
            type="text"
            onChange={handleChange}
            name="home_score"
            id="home_score"
          />
        </label>

        <label htmlFor="game_type_rivalry">
          <input
            type="checkbox"
            name="game_type"
            id="game_type_rivalry"
            value="Rivalry Game"
            onChange={handleChange}
          />
          Rivalry Game
        </label>

        <label htmlFor="game_type_conference">
          <input
            type="checkbox"
            name="game_type"
            id="game_type_conference"
            value="Conference Play"
            onChange={handleChange}
          />
          Conference Play
        </label>

        <label htmlFor="game_type_bowl">
          <input
            type="checkbox"
            name="game_type"
            id="game_type_bowl"
            value="Bowl Game"
            onChange={handleChange}
          />
          Bowl Game
        </label>

        <label htmlFor="game_type_playoff">
          <input
            type="checkbox"
            name="game_type"
            id="game_type_playoff"
            value="CFB Playoff"
            onChange={handleChange}
          />
          Playoff Game
        </label>

        <label htmlFor="game_type_conf_champ">
          <input
            type="checkbox"
            name="game_type"
            id="game_type_conf_champ"
            value="Conference Championship"
            onChange={handleChange}
          />
          Conference Championship
        </label>

        <label htmlFor="game_type_natl_champ">
          <input
            type="checkbox"
            name="game_type"
            id="game_type_natl_champ"
            value="Championship"
            onChange={handleChange}
          />
          National Championship
        </label>

        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
};

export default NewMatch;
