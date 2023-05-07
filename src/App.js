import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ShowSummary from "./components/ShowSummary";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/React-Intern-Assignment" element={<Home />} />
          <Route
            path="/React-Intern-Assignment/summary/:showId"
            element={<ShowSummary />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
