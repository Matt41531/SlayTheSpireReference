/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    character: null,
    rarity: null,
    type: null,
    function: null,
  });

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, filters, setFilters }}>
      {children}
    </SearchContext.Provider>
  );
}; 