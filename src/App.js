import "./App.css";
import { LightModeProvider } from "./component/lightModeContext";
import Calculator from "./component/calculator";
import Footer from "./component/Footer";
import Title from "./component/Title";

export default function App() {
  return (
    <div className="App">
      <Title />
      <LightModeProvider>
        <Calculator />
      </LightModeProvider>
      <Footer />
    </div>
  );
}
