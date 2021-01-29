import axios from "axios";
import React, { useState, useContext } from "react";
import "./UserProfile.css";
import UserContext from "C:/Users/Legion/Desktop/Projet/PFE_Demo/mypfe/src/context/UserContext.js";

//import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

function UserProfile() {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);
  const [UserImage, setUserImage] = useState({ file: null });
  const imageSelectHandler = (event) => {
    setUserImage({
      file: URL.createObjectURL(event.target.files[0]),
    });
    console.log(UserImage.file);
  };
  // const addUserProfilePhoto = (event) => {
  //   if (event) {
  //     event.preventDefault();
  //   }
  //   //axios.post()
  // };
  return (
    <div className="userProfile">
      <div className="userProfile__container">
        <div className="userProfile__containerAddPhoto">
          {/* <AddAPhotoIcon fontSize="large" className="addimgIcon" /> */}

          <img src={UserImage.file} alt="" />
        </div>
        <input
          type="file"
          name="userProfileImage"
          onChange={imageSelectHandler}
        ></input>
        <div className="userProfile__containerUserInfo">
          <p>Nom d'utilsateur:{userData.user.userName}</p>
          <p>Email:{userData.user.userEmail}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
