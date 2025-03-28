import { useGetCoffeeListQuery } from "api/apiSlice";

import CoffeeLogo from "../coffeeLogo/coffeeLogo";
import CoffeeNav from "../coffeeNav/cofffeeNav";
import CoffeeCards from "../coffeeCards/coffeeCards";
import ErrorMessage from "../errorMessage/errorMessage";

import BlackCoffee from "../../images/coffeePleasure.jpg";
import Spinner from "../spinner/spinner";
import "./coffeePleasure.css";

const CoffeePleasure = () => {
  const { data:coffeeList = [], isLoading, error } = useGetCoffeeListQuery();

  if (isLoading) return <Spinner/>;
  if (error) return <ErrorMessage message="Failed to load coffee"/>
  if (!coffeeList.length) return <p>No coffee found</p>;

  return (
    <section className="coffeePleasure">
      <header className="coffeePleasureHeader">
        <CoffeeNav color="white" />
        <h1 className="coffeePleasureTitle">For your pleasure</h1>
      </header>
      <section className="coffeePleasureAbout">
        <div className="coffeePleasureAboutWrapper">
          <div className="coffeePleasureImg">
            <img src={BlackCoffee} alt="BlackCoffee" />
          </div>
          <div className="coffeePleasureDescription">
            <h2>About our goods</h2>
            <CoffeeLogo color="black" />
            <p>
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
            </p>
            <p>
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions. As greatly removed calling
              pleased improve an. Last ask him cold feel met spot shy want.
              Children me laughing we prospect answered followed. At it went is
              song that held help face.
            </p>
          </div>
        </div>
        <span className="bottomLine"></span>
      </section>
      <CoffeeCards data={coffeeList}/>
      <footer className="coffeePleasureFooter">
        <CoffeeNav color="black" />
        <CoffeeLogo color="black" />
      </footer>
    </section>
  );
};

export default CoffeePleasure;
