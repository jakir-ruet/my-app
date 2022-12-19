import './App.css';
import Header from '../app/Header';
import Container from '../container/Container';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='container'>
        <Container/>
      </div>
    </div>
  );
}

export default App;
