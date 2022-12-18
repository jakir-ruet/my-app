import './App.css';
import MyProps from '../container/props/MyProps';
import MyMapping from '../container/mapping/MyMapping';
import MappingById from '../container/mappingById/MappingById';
import NestedMap from '../container/nestedmap/NestedMap';
import ClassComponent from '../container/classcomponent/ClassComponent';

function App() {
  return (
    <div className="App">
      <MyProps />
      <MyMapping />
      <MappingById />
      <NestedMap />
      <ClassComponent/>
    </div>
  );
}

export default App;
