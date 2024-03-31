import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CryptoPrice, Home, NavigationBar, Population } from "./components";
import { FiMenu } from "react-icons/fi";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen);
  };

  return (
    <>
      <main className="flex">
        {isSidebarOpen ? <NavigationBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> : <FiMenu className="absolute top-4 left-4 text-4xl cursor-pointer hover:text-green-500" onClick={toggleSidebar} />}
        <div className={`content-wrapper transition-all duration-500 ease-in-out ${isSidebarOpen ? "translate-x-10" : "translate-x-28"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/population" element={<Population />} />
            <Route path="/crypto-price-today" element={<CryptoPrice />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
