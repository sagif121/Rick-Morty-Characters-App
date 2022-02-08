import React from "react";
import "../model/model.css";

const Model = ({ showModel, user }) => {
  return (
    <>
      {showModel ? (
        <div className="card">
          <img src={user.image} className=" cardImg" alt="avatar" />
          <div className="card-body">
            <h1 className="cardName">{user.name} </h1>
            <div className="cardlocation">location: {user.location.name} </div>
            <div className="cardepisode">
              Number of episodes: {user.episode.length}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Model;
