import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">My Super Dooper Dictionary 📖</header>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          Coded by{" "}
          <a href="https://www.shecodes.io/cohorts/2005/projects/2348838?_gl=1*lzrgwm*_gcl_au*MjExNzc3Njc2OS4xNzM1NDQ0NDE3">
            Nila Smairat
          </a>
          , code included on{" "}
          <a
            href="https://github.com/nsmairat/ditionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </small>
      </footer>
    </div>
  );
}
