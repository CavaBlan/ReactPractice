import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Counter from "./componentPages/Counter.jsx";
import TemperatureConverter from "./componentPages/TemperatureConverter.jsx";
import DataTable from "./componentPages/DataTable.jsx";

const projects = [
  {
    id: "counter",
    title: "Counter",
    description: "This is a simple counter",
    path: "/counter",
  },
  {
    id: "temperature-converter",
    title: "Temperature Converter",
    description: "This is a simple temperature converter",
    path: "/temperature-converter",
  },
  {
    id: "data-table",
    title: "Data Table",
    description: "This is a data table that records employee information",
    path: "/data-table",
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
                      <p>{project.description}</p>
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
