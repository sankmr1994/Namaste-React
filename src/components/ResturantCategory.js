import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItem, setShowIndex, showItemIndex }) => {
  const handleClick = () => {
    setShowIndex(showItemIndex);
  };
  return (
    <div className="category-container">
      <div className="category-title-container" onClick={handleClick}>
        <span className="category-name">
          {data.title}({data.itemCards.length})
        </span>
        <span className="cat-arrow">🔽</span>
      </div>
      {showItem && <ItemList items={data.itemCards} showButton={true} />}
    </div>
  );
};

export default ResturantCategory;
