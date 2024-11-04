import React from "react";
import CDN_URL from "../utils/constants";

const ResturantCard = ({ restaurantData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurantData.info;
  const { slaString } = restaurantData.info.sla;

  return (
    <div className="resturant-card">
      <div className="res-logo-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + `${cloudinaryImageId}`}
        ></img>
      </div>

      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

//Higher Order Component
// Input -> ResturantCard
//Output -> Promoted ResturantCard

export const withPromotedLabel = (ResturantCard) => {
  return ({ restaurantData }) => {
    return (
      <div className="promoted-card">
        <label className="promoted">Promoted</label>
        <ResturantCard restaurantData={restaurantData} />
      </div>
    );
  };
};
export default ResturantCard;
