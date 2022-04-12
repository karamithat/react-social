import "./rightbar.css"
const Rightbar = () => {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImage" src="/assets/gift.png" alt="" />
            <span className="birthdayText">
              <b>Pola Foster</b> and <b>3 other friends </b>have a birthday today.
            </span>
          </div>
          <img className="rightbarAd" src="/assets/ad.png" alt="" />
        </div>
    </div>
  )
}

export default Rightbar