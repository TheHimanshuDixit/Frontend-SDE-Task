import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Welcome from "./components/Welcome";
import CustomerSurvey from "./components/CustomerSurvey";
import Thankyou from "./components/thankyou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/customersurvey" element={<CustomerSurvey />} />
        <Route exact path="/thankyou" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
