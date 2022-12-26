import MyMapping from './components/mapping/MyMapping';
import MappingById from './components/mappingById/MappingById';
import NestedMap from './components/nestedmap/NestedMap';

function Mapping() {
   return (
      <div className="card m-2">
         <div className="card-body">
            <MyMapping />
            <MappingById />
            <NestedMap/>
         </div>
      </div>
   )
}
export default Mapping;