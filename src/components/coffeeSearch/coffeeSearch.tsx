import "./coffeeSearch.css";

interface SearchPanelProps {
  search:string,
  onUpdateSearch: (value:string) => void
}

const SearchPanel : React.FC<SearchPanelProps> = ({ search, onUpdateSearch }) => {
  return (
    <div className="coffeFilterInput">
      <span>Looking for</span>
      <input
        type="text"
        className="coffeeFilterSearch"
        placeholder="start typing here..."
        value={search}
        onChange={(e) => onUpdateSearch(e.target.value)
        }
      />
    </div>
  );
};

export default SearchPanel;
