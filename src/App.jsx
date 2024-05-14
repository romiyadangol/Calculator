import Header from './components/Header';
import Calculator from './components/Calculator';
import './App.css'


function App() {

  return (
    <div className="wrapper">
      <Header title="React Calculator" />
      <Calculator />
    </div>
  );
}
export default App;
