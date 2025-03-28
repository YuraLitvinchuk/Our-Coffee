import { ICoffeeItem } from "../../types/coffeeItem";
import "./coffeeCardItem.css";

const CoffeeCardItem:React.FC<ICoffeeItem> = ({ name, country, price, img }) => {
  return (
    <div className="coffeeFilterCard">
      <img src={img} alt={name} />
      <div className="name">{name}</div>
      <div className="country">{country}</div>
      <div className="price">{price}$</div>
    </div>
  );
};

export default CoffeeCardItem;
