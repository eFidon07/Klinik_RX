import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { LandingPage } from "./pages";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
