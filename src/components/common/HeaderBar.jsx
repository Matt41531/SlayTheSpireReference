import FilteredSearch from "./FilteredSearch";

function HeaderBar() {
    return (
        <header>
            <div className="flex items-center justify-center bg-[#121212] text-white h-20 w-full">
                <div className="flex items-center justify-center w-full xl:w-1/4">
                    <FilteredSearch />
                </div>
            </div>
        </header>
    )
}

export default HeaderBar;