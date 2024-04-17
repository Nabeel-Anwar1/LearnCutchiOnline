import { Link } from "react-router-dom";

const LearnPage = () => {
  return (
    <div>
      <p>Choose from multiple different ways to learn!</p>
      <Link to={"/Learn/Games"}>Games</Link>
    </div>
  );
};

export default LearnPage;
