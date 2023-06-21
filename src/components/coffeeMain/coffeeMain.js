import CoffeeNav from "../coffeeNav/cofffeeNav";

import "./coffeeMain.css";
import Solimo from "../../images/Solimo Beans.jpg";
import Presto from "../../images/Presto Coffee.jpg";
import Aromistico from "../../images/Aromistico Coffee.jpg";
import CoffeeLogo from "../coffeeLogo/coffeeLogo";

const CoffeeMain = () => {
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
        <button className="headerBtn">More</button>
      </header>
      <section className="about">
        <h3 className="aboutTitle">About Us</h3>
        <CoffeeLogo color="black" />
        <p className="aboutDescr">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face.{" "}
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
          <div className="bestCoffeeItem">
            <img src={Solimo} alt="Aromistico Coffee" />
            <h4 className="bestDescr">Solimo Coffee Beans 2 kg</h4>
            <div className="price">10.73$</div>
          </div>
          <div className="bestCoffeeItem">
            <img src={Presto} alt="Aromistico Coffee" />
            <h4 className="bestDescr">Presto Coffee Beans 1 kg</h4>
            <div className="price">15.99$</div>
          </div>
          <div className="bestCoffeeItem">
            <img src={Aromistico} alt="Aromistico Coffee" />
            <h4 className="bestDescr">AROMISTICO Coffee 1 kg</h4>
            <div className="price">6.99$</div>
          </div>
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
