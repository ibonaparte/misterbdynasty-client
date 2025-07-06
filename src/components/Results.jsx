import { useState, useEffect } from "react";

function Results(props) {
  const [allSeasons, setAllSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");

  useEffect(() => {
    const seen = new Set();
    const seasons = [];

    props.matches.forEach((obj) => {
      if (!seen.has(obj.season_id)) {
        seen.add(obj.season_id);
        seasons.push(obj.season_id);
      }
    });

    setAllSeasons(seasons);
    if (seasons.length > 0) {
      setSelectedSeason(seasons[seasons.length - 1]);
    }
  }, [props.matches]);

  const handleChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const matchesBySeason = props.matches.filter(
    (obj) => obj.season_id == selectedSeason
  );

  function getTeamName(teamId) {
    var teamObject = props.teams.find((obj) => obj.team_id == teamId);

    return `${teamObject.school_name} ${teamObject.nickname}`;
  }

  function getOpponent(homeTeamId, awayTeamId, thisTeamId) {
    var opponentObject;

    if (homeTeamId == thisTeamId) {
      opponentObject = props.teams.find((obj) => obj.team_id == awayTeamId);

      return `vs ${getTeamName(opponentObject.team_id)}`;
    } else {
      opponentObject = props.teams.find((obj) => obj.team_id == homeTeamId);

      return `@ ${getTeamName(opponentObject.team_id)}`;
    }
  }

  function getResults(thisTeamId, homeTeamId, homeScore, awayScore) {
    //if thisTeam is the home team
    if (homeTeamId == thisTeamId) {
      if (homeScore > awayScore) {
        return (
          <>
            <span className="result--win">W</span>{" "}
            <span className="result--score">
              {homeScore} - {awayScore}
            </span>
          </>
        );
      } else {
        return (
          <>
            <span className="result--loss">L</span>{" "}
            <span className="result--score">
              {awayScore} - {homeScore}
            </span>
          </>
        );
      }
    } else {
      //if thisTeam isn't the home team...
      if (awayScore > homeScore) {
        return (
          <>
            <span className="result--win">W</span>{" "}
            <span className="result--score">
              {awayScore} - {homeScore}
            </span>
          </>
        );
      } else {
        return (
          <>
            <span className="result--loss">L</span>{" "}
            <span className="result--score">
              {homeScore} - {awayScore}
            </span>
          </>
        );
      }
    }
  }

  return (
    <>
      <div className="results-container">
        <form className="season-select">
          <select
            value={selectedSeason}
            onChange={handleChange}
            name="seasons"
            id="seasons"
          >
            {allSeasons
              .slice()
              .reverse()
              .map((value, index) => {
                return (
                  <option key={index} value={value}>
                    CFB 25 Season {value}
                  </option>
                );
              })}
          </select>
        </form>

        <table className="results-table">
          <thead>
            <tr>
              <th className="results-week">Wk</th>
              <th className="results-opponent">Opp.</th>
              <th className="results-score">Result</th>
            </tr>
          </thead>
          <tbody>
            {matchesBySeason.map((row, index) => {
              return (
                <tr key={index}>
                  <td className="results-week">{row.week_id}</td>
                  <td className="results-opponent">
                    {getOpponent(
                      row.home_id,
                      row.away_id,
                      props.user.current_team
                    )}
                  </td>
                  <td className="results-score">
                    {getResults(
                      props.user.current_team,
                      row.home_id,
                      row.home_score,
                      row.away_score
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Results;
