//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="bg-green-500 p-4 rounded-lg">Tailwind CSS Test!</h1>
       <Card userName="Vikram"/>
        <Card userName="Uday" />
      </header>
    </div>
  );
}

export default App;
