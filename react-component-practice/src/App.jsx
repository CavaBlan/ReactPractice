import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Counter from "./componentPages/Counter.jsx";
import TemperatureConverter from "./componentPages/TemperatureConverter.jsx";
import DataTable from "./componentPages/DataTable.jsx";
import DiceRoller from "./componentPages/DiceRoller.jsx";
import StarRating from "./componentPages/StarRating.jsx";

const projects = [
  {
    id: "counter",
    title: "Counter",
    difficulty: "Easy",
    description: "This is a simple counter",
    path: "/counter",
  },
  {
    id: "temperature-converter",
    title: "Temperature Converter",
    difficulty: "Easy",
    description: "This is a simple temperature converter",
    path: "/temperature-converter",
  },
  {
    id: "data-table",
    title: "Data Table",
    difficulty: "Medium",
    description: "This is a data table that records employee information",
    path: "/data-table",
  },
  {
    id: "dice-roller",
    title: "Dice Roller",
    difficulty: "Medium",
    description: "This is a dice game, users can customize the number of dice",
    path: "/dice-roller",
  },
  {
    id: "star-rating",
    title: "Star Rating",
    difficulty: "Medium",
    description: "This is a Star rating component",
    path: "/star-rating",
  },
];

function App() {
  return (
    <Router>
      <div>
        <header>
          <div>
            <Link className="title" to="/">
              My React Practice
            </Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid">
                  {projects.map((project) => (
                    <Link key={project.id} to={project.path} className="card">
                      <h2>{project.title}</h2>
                      <Difficulty>{project.difficulty}</Difficulty>
                      {/* <p>{project.description}</p> */}
                    </Link>
                  ))}
                </div>
              }
            />
            <Route path="/counter" element={<Counter />} />
            <Route
              path="/temperature-converter"
              element={<TemperatureConverter />}
            />
            <Route path="/data-table" element={<DataTable />} />
            <Route path="/dice-roller" element={<DiceRoller />} />
            <Route path="/star-rating" element={<StarRating />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Difficulty({ children }) {
  if (children === "Easy") {
    return <div className="difficulty-tag easy">{children}</div>;
  } else if (children === "Medium") {
    return <div className="difficulty-tag medium">{children}</div>;
  } else {
    return <div className="difficulty-tag hard">{children}</div>;
  }
}

export default App;
