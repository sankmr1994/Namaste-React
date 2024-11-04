import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const restaurantInfo = useResturantMenu(resId);

  if (restaurantInfo === null) {
    return <ShimmerUI />;
  }

  const { text } = restaurantInfo?.data?.cards[0]?.card?.card;
  const { cuisines, costForTwoMessage, areaName } =
    restaurantInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="menu">
      <h1 className="menu-name">{text}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h3 className="">Location - {areaName}</h3>
      {categories.map((category, index) => (
        <ResturantCategory
          key={index}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          showItemIndex={showIndex}
          setShowIndex={(showItemIndex) => {
            if (showItemIndex === index) {
              setShowIndex(null);
            } else {
              setShowIndex(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
