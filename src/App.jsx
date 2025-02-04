import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputForm from "./components/InputForm";
import PaymentWindow from "./components/PaymentWindow";
import "./App.css";
import PaymentTransition from "./components/PaymentTransition";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputForm />}></Route>
        <Route
          path="/payment_transition"
          element={<PaymentTransition />}
        ></Route>
        <Route path="/payment" element={<PaymentWindow />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
