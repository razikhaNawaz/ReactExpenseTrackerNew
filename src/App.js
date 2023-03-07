
import { Fragment, useContext } from 'react';
import AddExpense from './components/Pages/AddExpense';
import Authentication from './components/Authentication';
import ExpenseTable from './components/Pages/ExpenseTable';
import AuthContext from './Store/AuthContext';

function App() {
  const authCntx=useContext(AuthContext)
  const isAuthenticate=authCntx.isAuthenticate;
  return (
   <Fragment>
      {!isAuthenticate && <Authentication />}
      {isAuthenticate && <AddExpense />}
      {isAuthenticate && <ExpenseTable />}
      </Fragment>
  );
}

export default App;
