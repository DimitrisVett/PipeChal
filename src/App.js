import './App.css';
import getGreetingText from './feature';

function App() {

  return (
    <div className="App">
    
        
    <h1>Hello World</h1>
    <p id="greeting" > {getGreetingText(new Date().getHours())}</p>
        
    </div>
  );
}

export default App;
