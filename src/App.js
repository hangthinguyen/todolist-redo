import Body from "./Body";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <header className="flex flex-col justify-center items-center w-6/12 max-w-md">
        <NavBar />

        <Body />
      </header>
    </div>
  );
}

export default App;
