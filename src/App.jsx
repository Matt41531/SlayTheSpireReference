import HeaderBar from "./components/common/HeaderBar";
import Cards from "./components/common/Cards";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <HeaderBar />
      <Cards />
    </SearchProvider>
  );
}

export default App;
