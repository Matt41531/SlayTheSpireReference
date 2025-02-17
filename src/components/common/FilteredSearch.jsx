import { Input } from "@shadcn/input";
import { useEffect, useState } from "react";

function FilteredSearch() {
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
        <Input placeholder="Search Cards..." id="filtered-search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    );
}

export default FilteredSearch;
