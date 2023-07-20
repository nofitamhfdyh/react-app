import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; //jika export greet secara langsung tanpa menggunaan default, maka dalam file ini harus ditambah kurung kurawa (1a)
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name='Nupnup'>
        
      </Greet>
      <Greet name='Nopnop'>
         
      </Greet>
      <Greet name='Napnap'>
         
      </Greet>
      
      {/* <Welcome>

      </Welcome> */}

      {/* <Hello>
        
      </Hello> */}

      
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
