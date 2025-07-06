function UserCard(props) {
  const user = props.user;

  return (
    <a
      className="team-card"
      href={"/team/" + user.username}
      id={user.team_abbr.toLowerCase() + "-card"}
    >
      <img
        className="team-card__logo"
        src={`/img/${user.team_abbr}-logo.png`}
      />

      <div className="team-card__info">
        <p className="team-card__info__team">
          {user.school_name} {user.team_name}
        </p>
        <p className="team-card__info__gamertag">{user.username}</p>
      </div>
    </a>
  );
}

export default UserCard;
