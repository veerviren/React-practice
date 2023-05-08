import DataFromAPI from "./ApiData";
import "./App.css";
import Calculator from "./Calculator";
import CheckList from "./CheckList";
import MyComponent from "./Component";
import NameList from "./CreateElement";
import DataFetcher from "./DataFetcherSpinner";
import Filter from "./Filter";
import HideElement from "./HideElement";
import ImageSlider from "./ImageSlider";
import Login from "./Login";
import Maptoprint from "./Maptoprint";
import TodoList from "./TodoList";
import TodoListDynamic from "./TodoListDynamic";
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
      <div className="grid-item">
        <HideElement />
      </div>
      <div className="grid-item">
        <Calculator />
      </div>
      <div className="grid-item">
        <NameList />
      </div>
      <div className="grid-item">
        <MyComponent />
      </div>
      <div className="grid-item">
        <DataFetcher />
      </div>
      <div className="grid-item">
        <TodoList />
      </div>
      <din className="grid-item">
        <TodoListDynamic/>
        </din>
    </div>
  );
}

export default App;
