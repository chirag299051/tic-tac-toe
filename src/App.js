import logo from "./logo.svg";
import "./App.css";
import AppProvider from "./context";
import Main from "./Main";

function App() {
  return (
    <AppProvider>
      <Main></Main>
    </AppProvider>
  );
}

export default App;
