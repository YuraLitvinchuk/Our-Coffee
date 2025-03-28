import { Link } from "react-router-dom";
import { useMemo } from "react";

import CoffeeCardItem from "../coffeeCardItem/coffeeCardItem";
import { ICoffeeItem } from "../../types/coffeeItem";
import "./coffeeCards.css";

interface CoffeeCardsProps{
  data:ICoffeeItem[];
}

const CoffeeCards : React.FC<CoffeeCardsProps> = ({ data }) => {
  if (!data.length) return null;

  const elements = useMemo(() =>  data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Link to={`/coffee/${id}`} key={id}>
        <CoffeeCardItem {...itemProps} />
      </Link>
    );
  }), [data])
  return <div className="coffeFilterCards">{elements}</div>;
};

export default CoffeeCards;
