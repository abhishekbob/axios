import DataContextProvider from './context/DataContext';
import './App.css';
import UserDetails from "./components/UserDetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <DataContextProvider>
          <UserDetails/>
      </DataContextProvider>
    </div>
  );
}

export default App;
