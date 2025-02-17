import FilteredSearch from "./FilteredSearch";

function HeaderBar() {
    return (
        <header>
            <div className="flex items-center justify-center bg-[#121212] text-white h-20">
                <div className="flex items-center justify-center w-1/4">
                    <FilteredSearch />
                </div>
            </div>
        </header>
    )
}

export default HeaderBar;