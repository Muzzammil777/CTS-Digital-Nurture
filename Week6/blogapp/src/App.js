// Root component - renders the blog post list
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <h1>Welcome to BlogApp</h1>
      {/* Render all posts */}
      <Posts />
    </div>
  );
}

export default App;
