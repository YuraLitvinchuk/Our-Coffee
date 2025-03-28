import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store/store";
import { useGetCoffeeListQuery } from "api/apiSlice";
import { setFilter } from "store/coffeSlice";
import "./coffeeFilter.css";

const CoffeeFilter = () => {
  const dispatch: AppDispatch = useDispatch();
  const {filter} = useSelector((state:RootState) => state.coffee);
  const {data:coffeeList = []} = useGetCoffeeListQuery();

  const uniqueCountries = [...new Set(coffeeList.map((coffee) => coffee.country))];

  const buttons = uniqueCountries.map((country) => {
    const active = filter === (country || "");
    const clazz = active ? "dark" : "white";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={country}
        onClick={() => dispatch(setFilter(country || ""))}
      >
        {country}
      </button>
    );
  });
  return (
    <div className="coffeFilterBtn">
      <span>Or filter</span>
      {buttons}
    </div>
  );
};

export default CoffeeFilter;
