import React from "react";
import "../styles/profile.css";

const Profile = () => {
  return (
    <div id="profileDiv">
      <div id="profile-left">
        <div id="profile-left-1">
          <div id="greet-hi">Hi, My Name is</div>
          <div id="name">Sachin Ingale</div>
          <div className="typewriter">
            <p>Full Stack Web Developer</p>
          </div>
          <div id="view-resume">
            <div>View Resume</div>
            <div>
              <i class="fas fa-file-download" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>


      <div id="dp-Div">
        <div id="dp">
            <img id="img-dp" src="https://o.remove.bg/downloads/b57a7223-b127-4a96-a0a6-5f7be269e677/1649504316031-removebg-preview.png" alt="Sachin Ingale's display pic" />
        </div>
      </div>

      <div id="links">
          <div id="linkedin">
            <span className="iconify" data-icon="feather:linkedin"></span>
          </div>
          <div id="gitHub">
            <span className="iconify" data-icon="feather:github"></span>
          </div>
          <div id="instagram">
            <span className="iconify" data-icon="feather:instagram"></span>
          </div>
          <div id="twitter">
            <span className="iconify" data-icon="feather:twitter"></span>
          </div>
      </div>


    </div>
  );
};

export default Profile;
