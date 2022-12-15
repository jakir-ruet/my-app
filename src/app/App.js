import './App.css';
import MyProps from '../container/props/MyProps';
import MyMapping from '../container/mapping/MyMapping';
import MappingById from '../container/mappingById/MappingById';

function App() {
  return (
    <div className="App">
      <MyProps />
      <MyMapping />
      <MappingById />
    </div>
  );
}

export default App;
