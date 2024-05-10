import css from "./SearchBar.module.css";
import React, {useState} from "react";
import toast, {Toaster} from "react-hot-toast";

interface SearchBarType {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({onSearch}: SearchBarType) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    onSearch(searchTerm);
    setSearchTerm("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className={css.search_bar}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
        <Toaster/>
      </form>
    </header>
  );
};

export default SearchBar;
