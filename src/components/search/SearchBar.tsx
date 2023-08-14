import React, { useState } from "react";
import styles from "./styles.module.scss";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        className={styles.searchBar__input}
        type="text"
        placeholder="Search by name"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className={styles.searchBar__button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
