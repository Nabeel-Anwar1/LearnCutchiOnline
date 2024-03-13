import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/Login">Login!</Link>
      <p>Are you ready to learn the language Cutchi?</p>
      <p>
        You can learn by listening to some recordings of native speakers or by
        playing some games!
      </p>
      <p>Sign up now to track your progress and learn!</p>
    </div>
  );
};

export default HomePage;
