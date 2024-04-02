import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CryptoPrice, Home, NavigationBar, Population } from "./components";
import { FiMenu } from "react-icons/fi";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavigationBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex flex-grow overflow-y-auto gap-20">
        {isSidebarOpen ? (
          <div className="flex-shrink-0 w-64 bg-green-500">
            <div className="absolute top-4 left-4">
              <FiMenu
                className="text-4xl text-white cursor-pointer hover:text-green-500"
                onClick={toggleSidebar}
              />
            </div>
          </div>
        ) : (
          <div className="flex-shrink-0">
            <div className="absolute top-4 left-4">
              <FiMenu
                className="text-4xl text-white cursor-pointer hover:text-green-500"
                onClick={toggleSidebar}
              />
            </div>
          </div>
        )}
        <div className="flex-1 p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/population" element={<Population />} />
            <Route path="/crypto-price-today" element={<CryptoPrice />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
