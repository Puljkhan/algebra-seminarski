import ArrowLeftCircle from "./assets/arrow-left-circle";
import "./styles/styles.scss";

function App() {
  return (
    <div className="container">
      <h1>Chat aplikacija</h1>
      <div className="chat">
        <header className="chat__header">
          <ArrowLeftCircle />
          <div className="chat__header__info"></div>
        </header>
      </div>
    </div>
  );
}

export default App;
