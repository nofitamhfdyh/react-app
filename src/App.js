import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; //jika export greet secara langsung tanpa menggunaan default, maka dalam file ini harus ditambah kurung kurawa (1a)
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheets from './components/StyleSheets';
import InLine from './components/InLine';
import './appStyles.css';
import style from './appStyles.module.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">

      <Form>
        
      </Form>
      {/* <h1 className='error'> Error </h1>
      <h1 className={style.success}> Success </h1> */}

      {/* <InLine>

      </InLine> */}
      {/* <StyleSheets primary={true}> {/* pemanggilan (13)

      </StyleSheets> */}

      {/* <NameList>

      </NameList> */}
      {/* <UserGreeting>
        
      </UserGreeting> */}
      {/* <ParentComponent>
        
      </ParentComponent> */}
      {/* <EventBind>

      </EventBind> */}
      {/* <ClassClick>

      </ClassClick>
      <FunctionClick>

      </FunctionClick> */}
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
