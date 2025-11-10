

import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Footer from "./components/footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* Flexbox container */}
      <div className="flex-grow-1"> {/* Main content area */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>
      <Footer /> {/* Footer will stick to the bottom */}
    </div>
  );
}

export default App;

