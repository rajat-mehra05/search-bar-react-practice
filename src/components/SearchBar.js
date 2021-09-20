import { useHistory } from "react-router-dom";

const Search = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`?s=${searchQuery}`);
  };

  return (
    <div>
      <form action="/" method="GET" autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
          <span className="visually-hidden"> Search for blog posts </span>
        </label>{" "}
        <br />
        <br />
        <input
          type="text"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          id="header-search"
          placeholder="Seach for blog posts"
          name="s"
        />
        <button type="submit"> Search </button>
      </form>
    </div>
  );
};

export default Search;
