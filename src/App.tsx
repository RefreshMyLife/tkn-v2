import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import { Header } from "./components/Header/Header";
import { Home } from "./page/Home";
import Manually from "./page/Manually";
import { Automatically } from "./page/Automatically";
import Staking from "./page/Staking";
import StakingDashboard from "./page/StackingDashboard";



function App() {

  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-100 font-acid font-regular">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manual" element={<Manually/>} />
          <Route path="/automatic" element={<Automatically />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/staking-dashboard" element={<StakingDashboard/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
