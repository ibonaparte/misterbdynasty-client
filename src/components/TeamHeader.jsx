function TeamHeader(props) {
  const user = props.user;

  return (
    <>
      <div className="team-header">
        <img className="header-logo" src={`/img/${user.team_abbr}-logo.png`} />
        <div className="team-header--text">
          <h1>
            {user.school_name} {user.team_name}
          </h1>
          <div className="team-header--info">
            <img
              className="team-header--platform"
              src="https://logos-world.net/wp-content/uploads/2020/11/Xbox-Emblem.png"
              alt="xbox"
            />
            <h2>
              <a
                href={`https://www.xbox.com/en-us/play/user/${user.username}`}
                target="_blank"
              >
                {user.username}
              </a>
            </h2>

            <img
              className="team-header--platform"
              src="https://1000logos.net/wp-content/uploads/2018/08/twitch-tv-logo.jpg"
              alt="twitch"
            />
            <h2>
              <a
                href={`https://www.twitch.tv/${user.twitch_name}`}
                target="_blank"
              >
                {user.twitch_name}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamHeader;
