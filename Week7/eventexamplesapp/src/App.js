// Event Examples App - demonstrates various React event handling patterns
import Counter from "./components/Counter";
import WelcomeButton from "./components/WelcomeButton";
import SyntheticEventButton from "./components/SyntheticEventButton";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  return (
    <div>
      <h1>React Events Example</h1>
      {/* Counter using state and onClick */}
      <Counter />
      {/* Basic button click event */}
      <WelcomeButton />
      {/* Synthetic event demo */}
      <SyntheticEventButton />
      {/* onChange event for currency input */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;
