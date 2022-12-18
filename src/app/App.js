import './App.css';
import MyProps from '../container/props/MyProps';
import MyMapping from '../container/mapping/MyMapping';
import MappingById from '../container/mappingById/MappingById';
import NestedMap from '../container/nestedmap/NestedMap';
import ClassComponent from '../container/classcomponent/ClassComponent';
import StateLifeCycle from '../container/classcomponent/component/statelifecycle/component/Clock';

function App() {
  return (
    <div className="App">
      <MyProps />
      <MyMapping />
      <MappingById />
      <NestedMap />
      <ClassComponent />
      <StateLifeCycle />
    </div>
  );
}

export default App;
