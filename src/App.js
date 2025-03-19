import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">My Super Dooper Dictionary</header>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          Coded by <a href="">Nila Smairat</a>, code included on{" "}
          <a
            href="https://github.com/nsmairat/ditionary-project"
            target="_blank"
          >
            GitHub
          </a>
        </small>
      </footer>
    </div>
  );
}
