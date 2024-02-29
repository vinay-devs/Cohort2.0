import CoverProfile from "./CoverProfile";
import Details from "./Details";

const Profile = () => {
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        margin: "auto",
        position: "relative",
      }}
    >
      <CoverProfile />
      <Details />
    </div>
  );
};

export default Profile;
