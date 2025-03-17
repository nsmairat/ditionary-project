import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hello</header>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          Coded by Nila Smairat, code included on{" "}
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
