import { useParams } from "react-router-dom";

import { useGetCoffeeListQuery } from "api/apiSlice";

import CoffeeNav from "../coffeeNav/cofffeeNav";
import CoffeeLogo from "../coffeeLogo/coffeeLogo";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

import "./coffeeOne.css";

const CoffeeOne = () => {
  const { id } = useParams();
  const {data:coffeeList = [], isLoading, error} = useGetCoffeeListQuery();

  const selectedCoffee = coffeeList.find((coffee) => coffee.id === id);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message="Failed to load coffee"/>;
  if (!selectedCoffee) return <p>Product not found</p>;

  return (
    <section className="coffeeOne">
      <header className="coffeeOneHeader">
        <CoffeeNav color="white" />
        <h1 className="coffeeOneTitle">Our Coffee</h1>
      </header>
      <section className="coffeeOneAbout">
        <div className="coffeeOneAboutWrapper">
          <div className="coffeeOneImg">
            <img src={selectedCoffee.img} alt={selectedCoffee.name} />
          </div>
          <div className="coffeeOneDescription">
            <h2>About it</h2>
            <CoffeeLogo color="black" />
            <p>
              <strong>Country:</strong> {selectedCoffee.country}
            </p>
            <p>
              <strong>Description:</strong> {selectedCoffee.description}
            </p>
            <p>
              Price: <strong>{selectedCoffee.price}$</strong>
            </p>
          </div>
        </div>
      </section>
      <footer className="coffeOneFooter">
        <CoffeeNav color="black" />
        <CoffeeLogo color="black" />
      </footer>
    </section>
  );
};

export default CoffeeOne;
