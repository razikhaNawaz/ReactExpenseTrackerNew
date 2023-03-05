
import { Fragment, useEffect } from 'react';
import Authentication from './components/Authentication';

function App() {
  useEffect(()=>{
      console.log('useEffect called')
  },[])
  return (
   <Fragment>
      <Authentication />
      </Fragment>
  );
}

export default App;
