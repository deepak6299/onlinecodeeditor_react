import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import DattaProvider from './context/DataProvider';


function App() {
  return (
    <DattaProvider>
      <Home/>
   
    </DattaProvider>
  );
}

export default App;
