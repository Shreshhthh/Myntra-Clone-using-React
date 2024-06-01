import { useSelector } from "react-redux";
import BagItem from "../components/bagItems";
import BagSummary from "../components/bagSummary";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.item);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((items) => (
            <BagItem item={items} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
