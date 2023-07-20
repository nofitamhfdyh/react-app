import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; //jika export greet secara langsung tanpa menggunaan default, maka dalam file ini harus ditambah kurung kurawa (1a)
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div className="App">
      <FunctionClick>
        
      </FunctionClick>
      {/* <Counter>

      </Counter> */}
      {/* <Message>

      </Message> */}
{/* 
      <Greet name='Nupnup' heroName='Batman'>
        <p>
          This is the children Prop
        </p>
        <p>
          This is the children Prop
        </p>
      </Greet>
      <Greet name='Nopnop' heroName='Superman'>
         <button>
            Action
         </button>
      </Greet>
      <Greet name='Napnap' heroName='Wonder Woman'>
         
      </Greet>
      
      <Welcome name='Nupnup' heroName='Batman'>

      </Welcome>

      <Welcome name='Nopnop' heroName='Superman'>

      </Welcome>

      <Welcome name='Napnap' heroName='Wonder Woman'>

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
