import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./componentes/navbar/Navbar";
import Space from "./componentes/whitespcbox/Space";
import Plans from "./componentes/plans/Plans";
// import './Reponsive.css'
import Pj_manegment from "./componentes/projectmngnt/Pj_manegment";
import { manegement } from "./Data/Pj_manegment";
import { manegement2 } from "./Data/Pj_manegment";
import { manegement3 } from "./Data/Pj_manegment";
import { manegement4 } from "./Data/Pj_manegment";

import Afterplan from "./componentes/afterplan_cmpnt/Afterplan";
import Sponsors from "./componentes/sponsors/Sponsors";

import Client from "./componentes/Client/Client";
import Bfooter1 from "./componentes/footerbefore/Bfooter1";
import Footer from "./componentes/footer/Footer";
import Sign from "./signuppage/Sign";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="">
          <Routes>
            <Route exact path="/" element={<Space />}></Route>
            <Route exact path="/about" element={<Client />}></Route>
            <Route exact path="/contact" element={<Afterplan />}></Route>
            <Route exact path="/pricing" element={<Sponsors />}></Route>
            <Route exact path="/loginpage" element={<Sign />}></Route>
          </Routes>
        </div>

        {/* <Space /> */}

        <Pj_manegment props={manegement} />
        <Pj_manegment props={manegement2} />
        <Plans />
        <Afterplan />
        <Pj_manegment props={manegement3} />
        <Pj_manegment props={manegement4} />

        <Client />
        <Sponsors />
        <Bfooter1 />

        <Footer />

        {/* <Sign/> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
