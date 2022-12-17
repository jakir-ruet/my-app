import './App.css';
import MyProps from '../container/props/MyProps';
import MyMapping from '../container/mapping/MyMapping';
import MappingById from '../container/mappingById/MappingById';
import NestedMap from '../container/nestedmap/NestedMap';

function App() {
  return (
    <div className="App">
      <MyProps />
      <MyMapping />
      <MappingById />
      <NestedMap />
    </div>
  );
}

export default App;
