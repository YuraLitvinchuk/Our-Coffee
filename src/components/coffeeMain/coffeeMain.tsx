import { useGetCoffeeListQuery } from "api/apiSlice";
import { ICoffeeItem } from "../../types/coffeeItem";
import CoffeeNav from "../coffeeNav/cofffeeNav";
import CoffeeLogo from "../coffeeLogo/coffeeLogo";
import CoffeeCards from "../coffeeCards/coffeeCards";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import "./coffeeMain.css";

const CoffeeMain = () => {
  const {data:coffeeList = [], isLoading, error } = useGetCoffeeListQuery();

  const bestCoffee: ICoffeeItem[] = coffeeList.filter((coffee) => coffee.best);

  if (isLoading) return <Spinner/>;
  if (error) return <ErrorMessage message="Failed to load coffee"/>
  if (!coffeeList.length) return <p>No coffee found</p>;

  return (
    <div className="App">
      <header className="header">
        <CoffeeNav color="white" />
        <h1 className="headerTitle">Everything You Love About Coffee</h1>
        <CoffeeLogo color="white" />
        <h2 className="headerSubtitle">
          We makes every day full of energy and taste <br />
          Want to try our beans?
        </h2>
        <button className="headerBtn" onClick={() => document.getElementById("more")?.scrollIntoView({ behavior: "smooth" })}>More</button>
      </header>
      <section className="about" id="more">
        <h3 className="aboutTitle">About Us</h3>
        <CoffeeLogo color="black" />
        <p className="aboutDescr">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face.
        </p>
        <p className="aboutDescr">
          Now residence dashwoods she excellent you. Shade being under his bed
          her, Much read on as draw. Blessing for ignorant exercise any yourself
          unpacked. Pleasant horrible but confined day end marriage. Eagerness
          furniture set preserved far recommend. Did even but nor are most gave
          hope. Secure active living depend son repair day ladies now.
        </p>
      </section>
      <section className="best">
        <h3 className="bestTitle">Our best</h3>
        <div className="bestCoffee">
            <CoffeeCards data={bestCoffee} />
        </div>
      </section>
      <footer className="footer">
        <CoffeeNav color="black" />
        <CoffeeLogo color="black" />
      </footer>
    </div>
  );
};

export default CoffeeMain;
