import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

import { AppDispatch, RootState } from "../../store/store";
import { setSearch } from "../../store/coffeSlice";
import { useGetCoffeeListQuery } from "api/apiSlice";

import CoffeeNav from "../coffeeNav/cofffeeNav";
import CoffeeSearch from "../coffeeSearch/coffeeSearch";
import CoffeeFilter from "../coffeeFilter/coffeeFilter";
import CoffeeCards from "../coffeeCards/coffeeCards";
import CoffeeLogo from "../coffeeLogo/coffeeLogo";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

import Girl from "../../images/coffeeShopGirl.jpg";

import "./coffeeShop.css";

const CoffeeShop = () => {
  const dispatch : AppDispatch = useDispatch();
  const { search, filter} = useSelector((state : RootState) => state.coffee);
  const {data:coffeeList = [], isLoading, error} = useGetCoffeeListQuery();

  const filteredCoffeeList = useMemo(() => {
     return coffeeList.filter((item) => {
      const matchesSearch = !search || item.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === "all" || item.country === filter;
      return matchesSearch && matchesFilter;
    })
  }, [coffeeList, search, filter])

  if (isLoading) return <Spinner/>;
  if (error) return <ErrorMessage message="Failed to load coffee"/>
  if (!coffeeList.length) return <p>No coffee found</p>;

  return (
    <div className="coffeShop">
      <header className="coffeeShopHeader">
        <CoffeeNav color="white" />
        <h1 className="coffeeShopTitle">Our Coffee</h1>
      </header>
      <section className="coffeeShopAbout">
        <div className="coffeeShopAboutWrapper">
          <div className="coffeeShopGirl">
            <img src={Girl} alt="Girl" />
          </div>
          <div className="coffeeShopDescription">
            <h2>About our beans</h2>
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
      <section className="search-panel">
        <CoffeeSearch search={search} onUpdateSearch={(value) => dispatch(setSearch(value))} />
        <CoffeeFilter />
      </section>
      <CoffeeCards data={filteredCoffeeList || []} />
      <footer className="coffeShopFooter">
        <CoffeeNav color="black" />
        <CoffeeLogo color="black" />
      </footer>
    </div>
  );
};

export default CoffeeShop;
