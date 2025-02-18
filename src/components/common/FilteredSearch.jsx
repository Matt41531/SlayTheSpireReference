import { Input } from "@shadcn/input";
import { useEffect, useState } from "react";
import { ComboBoxResponsive } from "@shadcn/combobox";
function FilteredSearch() {
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
    {
      value: "rare",
      label: "Rare",
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
      value: "characterMechanic",
      label: "Character Mechanic",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");

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
      <ComboBoxResponsive options={characters} title="Character" />
      <ComboBoxResponsive options={rarities} title="Rarity" />
      <ComboBoxResponsive options={cardTypes} title="Type" />
      <ComboBoxResponsive options={cardFunctions} title="Function" />
    </div>
  );
}

export default FilteredSearch;
