import "./App.css";
import { ReactSVG } from "./components/Icons";

function App() {
  return (
    <>
      <div className="flex items-center gap-3">
        <ReactSVG size={100} />
        <h1>Componentes React</h1>
      </div>
    </>
  );
}

export default App;
