import { Input } from "@shadcn/input";
import { useEffect, useContext } from "react";
import { ComboBoxResponsive } from "@shadcn/combobox";
import { SearchContext } from "../../context/SearchContext";

function FilteredSearch() {
  const { searchQuery, setSearchQuery, setFilters } = useContext(SearchContext);

  const characters = [
    {
      value: "ironclad",
      label: "Ironclad",
    },
    {
      value: "watcher",
      label: "Watcher",
    },
    {
      value: "silent",
      label: "Silent",
    },
    {
      value: "defect",
      label: "Defect",
    },
  ];

  const rarities = [
    {
      value: "starter",
      label: "Starter",
    },
    {
      value: "common",
      label: "Common",
    },
    {
      value: "uncommon",
      label: "Uncommon",
    },
    {
      value: "rare",
      label: "Rare",
    },
  ];

  const cardTypes = [
    {
      value: "attack",
      label: "Attack",
    },
    {
      value: "skill",
      label: "Skill",
    },
    {
      value: "power",
      label: "Power",
    },
  ];

  const cardFunctions = [
    {
      value: "damage",
      label: "Damage",
    },
    {
      value: "block",
      label: "Block",
    },
    {
      value: "heal",
      label: "Heal",
    },
    {
      value: "draw",
      label: "Draw",
    },
    {
      value: "character mechanic",
      label: "Character Mechanic",
    },
  ];

  function handleFilterChange(type, value) {
    console.log("Filter: ", type, value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  }

  function handleSearchKeyDown(event) {
    if (event.key === "k" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      document.getElementById("filtered-search").focus();
    } else if (event.key === "Enter") {
      event.preventDefault();
      console.log("Search: ", searchQuery);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleSearchKeyDown);
    return () => window.removeEventListener("keydown", handleSearchKeyDown);
  }, [searchQuery]);

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Search Cards..."
        id="filtered-search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ComboBoxResponsive
        options={characters}
        title="Character"
        onChange={(value) => handleFilterChange("character", value)}
      />
      <ComboBoxResponsive
        options={rarities}
        title="Rarity"
        onChange={(value) => handleFilterChange("rarity", value)}
      />
      <ComboBoxResponsive
        options={cardTypes}
        title="Type"
        onChange={(value) => handleFilterChange("type", value)}
      />
      <ComboBoxResponsive
        options={cardFunctions}
        title="Function"
        onChange={(value) => handleFilterChange("function", value)}
      />
    </div>
  );
}

export default FilteredSearch;
