import './App.css';
import Expenseshort from './components/Expenseshort'
import Add from './components/addtransaction';
import Balance from './components/balance'
import History from './components/history'
import Data from './context/contextprovider';

function App() {
  return (
    <Data className="App">
        <label style={{display:'flex',flexDirection:'row',justifyContent:'center',fontSize:'xx-large'}}>Expenses Tracker</label>
      <>
        <Balance/>
        <Expenseshort/>
        <History/>
        <Add/>
      </>
    </Data>
  );
}

export default App;
