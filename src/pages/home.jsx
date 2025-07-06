import UserCard from "../components/UserCard";
import Layout from "../layouts/Layout";

const Home = (props) => {
  const users = props.users;

  return (
    <Layout>
      <h2>Active Members</h2>
      <div className="team-card__container">
        {users
          .filter((item) => item.current_team !== null)
          .map((user, index) => (
            <UserCard user={user} key={index} />
          ))}
      </div>
    </Layout>
  );
};

export default Home;
