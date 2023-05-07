import DataFromAPI from "./ApiData";
import "./App.css";
import CheckList from "./CheckList";
import Filter from "./Filter";
import ImageSlider from "./ImageSlider";
import Login from "./Login";
import Maptoprint from "./Maptoprint";
import ToogleContent from "./ToogleContent";
import Counter from "./counter";

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <Counter />
      </div>
      <div className="grid-item">
        <Filter />
      </div>
      <div className="grid-item">
        <Maptoprint />
      </div>
      <div className="grid-item">
        <ToogleContent />
      </div>
      <div className="grid-item">
        <ImageSlider />
      </div>
      <div className="grid-item">
        <CheckList />
      </div>
      <div className="grid-item">
        <Login />
      </div>
      <div className="grid-item">
        <DataFromAPI />
      </div>
    </div>
  );
}

export default App;
