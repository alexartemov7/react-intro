import './App.css';
import CoffeesComponent from './components/CoffeesComponent';
import DateComponent from './components/DateComponent';
import { ChildComponent, GrandChild } from './components/Grandchildren';

function App() {
  //all javascript world
  console.log('test')
  //in return only jsx lives
  return (
    <div className="App">
      <header className="App-header">
        <ChildComponent />
        <CoffeesComponent />
        <GrandChild />
        <DateComponent />
      </header>
      <h2> test </h2>
    </div>
  );
}

export default App;
