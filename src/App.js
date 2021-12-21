import { Lander } from "./pages";
import Snowfall from "react-snowfall";
import StarrySky from "./components/starry-sky";
import './App.css';

function App() {
  return (
    <>
      <Snowfall />
      <StarrySky />
      <Lander />
    </>
  );
}

export default App;
