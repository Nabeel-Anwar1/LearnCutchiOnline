import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/Login">Login!</Link>
      <Link to="/Account">Account symbol</Link>
      <p>Are you ready to learn the language Cutchi?</p>
      <p>
        There are many ways to learn, you can read through common phrases and
        key words, listen to native speakers holding a conversation and play
        memory games to test your knowledge!
      </p>
      <p>Sign up now to track your progress and learn!</p>
      <Link to="/Learn">Learn!</Link>
    </div>
  );
};

export default HomePage;

//Home Page. Will contain navbar with different locations to link to, account symbol to go to account page/login.
