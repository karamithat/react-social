import "./online.css";

const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="righbarUsername">{user.username}</span>
    </li>
  );
};

export default Online;
