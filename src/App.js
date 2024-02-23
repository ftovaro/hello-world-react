import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
        <Hello name="Felipe" />
        <MyForm />
    </div>
  );
}

export default App;
