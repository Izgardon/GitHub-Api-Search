import "./App.css";
import * as components from "./components";

function App() {
  return (
    <main>
      <components.SearchForm />

      <components.Profile />
      <components.Repository />
      <components.Repositories />
    </main>
  );
}

export default App;
