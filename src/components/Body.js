import { useContext, useState } from "react";
import useRestaurant from "../utils/useRestaurant";
import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [listOfResturant, filterListOfResturant, setFilterListOfResturant] =
    useRestaurant();

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  if (listOfResturant.length === 0) {
    return <ShimmerUI />;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => setSearchTxt(e.target.value)}
            value={searchTxt}
          ></input>
          <button
            className="filter-btn"
            id="search-filter-btn"
            onClick={() => {
              const filteredData = listOfResturant.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase());
              });
              console.log(filteredData);
              setFilterListOfResturant(filteredData);
              console.log(filterListOfResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilterListOfResturant(
              listOfResturant.filter(
                (resturant) => resturant.info.avgRating > 4.2
              )
            );
          }}
        >
          Top Rated Resturant
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setFilterListOfResturant(listOfResturant);
            setSearchTxt("");
          }}
        >
          Clear Filter
        </button>
        <input
          type="text"
          placeholder="Change UserName"
          className="userName-box"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <div className="restaurant-container">
        {filterListOfResturant.map((restaurant) => (
          <Link
            className="resmenu-link"
            key={restaurant.info.id}
            to={`/resturant/${restaurant.info.id}`}
          >
            {restaurant?.info?.avgRating > 4.2 ? (
              <ResturantCardPromoted restaurantData={restaurant} />
            ) : (
              <ResturantCard restaurantData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
