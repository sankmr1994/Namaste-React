import { useDispatch } from "react-redux";
import CDN_URL from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, showButton }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="item-category-container">
          <div className="item-details">
            <div>
              <span className="item-name">
                {item.card.info.name}
                {" - Rs "}
              </span>
              <span className="item-name">
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="item-desc">{item.card.info.description}</p>
            {showButton && (
              <button
                className="add-item"
                onClick={() => {
                  // Dispatch an action
                  handleAddItem(item);
                }}
              >
                Add item
              </button>
            )}
          </div>
          <div className="item-img">
            <img src={CDN_URL + item.card.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
