import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; 

function App() {
  return (
    <div className="App">
      <Greet> 
        //pemanggilan file Greet 
      </Greet>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the club, Nupnup!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
