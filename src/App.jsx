import HeaderBar from "./components/common/HeaderBar";
function App() {
  return (
    <>
      <HeaderBar />
      <div className="flex flex-col items-center justify-center h-screen bg-[#121212]">
        <h1 className="text-3xl font-bold text-white hover:text-blue-300">
          React + Vite + Tailwind
        </h1>
      </div>
    </>
  );
}

export default App;
