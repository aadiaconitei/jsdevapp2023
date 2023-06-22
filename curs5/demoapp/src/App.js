import logo from './logo.svg';
import './App.css';
import Salut from './components/Salut';
import Masina from './components/Masina';
import Form from './components/Form';
import MyForm from './components/MyForm';

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  const obj = { name: 'Alice', email: 'demo@demo.com', password: '123456', car: 'BMW', message: 'Salut' };
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Salut nume = "Dan"  curs='React'/>
        <Salut nume = "Ion"  />
        <Masina car ={carInfo} />
      </header>
    
    </div>

    <h1> Frmular de inregistrare</h1>
    <Form />
    <MyForm {...obj}/>
    </>
  );
}

export default App;
