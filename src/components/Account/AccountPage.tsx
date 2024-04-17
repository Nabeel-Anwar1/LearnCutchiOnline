import { Link } from "react-router-dom";

const AccountPage = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      {/*Data received from database will contain username, possibly records of what tasks have been completed.*/}
    </div>
  );
};

export default AccountPage;

//Account Page. Will contain name and track progress.
