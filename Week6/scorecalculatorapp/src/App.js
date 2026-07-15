// Score Calculator App - demonstrates props passing in React
import {CalculateScore} from '../src/Components/CalculateScore';

function App() {
  return (
    <div>
      {/* Pass student data as props to CalculateScore component */}
      <CalculateScore Name = {"Steeve"}
      School={"KSV Hr. Sec School"}
      total={562}
      goal={6}
      />
    </div>
  );
}

export default App;
