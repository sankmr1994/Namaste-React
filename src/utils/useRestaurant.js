import { useEffect, useState } from "react";
import { REST_API } from "./constants";

const useRestaurant = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterListOfRes, setFilterListOfRes] = useState([]);

  //Fetch resturant's
  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_API);
    const json = await data.json();
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return [listOfRes, filterListOfRes, setFilterListOfRes];
};

export default useRestaurant;
