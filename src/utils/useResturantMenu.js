import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useResturantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseData = await fetch(MENU_API_URL + resId);
    const data = await responseData.json();
    console.log(data);
    setRestaurantInfo(data);
  };

  return restaurantInfo;
};
export default useResturantMenu;
