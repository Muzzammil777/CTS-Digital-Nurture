// Cohort Dashboard - displays multiple cohort cards
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div>
      {/* Ongoing cohort */}
      <CohortDetails name="React Bootcamp" status="ongoing" startDate="2025-08-01" />
      {/* Completed cohort */}
      <CohortDetails name="NodeJS Mastery" status="completed" startDate="2025-05-10" />
    </div>
  );
}

export default App;
