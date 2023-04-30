import './App.css';
import Expenseshort from './components/Expenseshort'
import Add from './components/addtransaction';
import Balance from './components/balance'
import History from './components/history'
import Data from './context/contextprovider';
import Chart from './components/expense-chart';

function App() {
  return (
    <Data className="App">
        <label style={{display:'flex',flexDirection:'row',justifyContent:'center',fontSize:'xx-large'}}>Expenses Tracker</label>
      <>
        <Balance/>
        <Expenseshort/>
        <History/>
        <Add/>
        <Chart/>
      </>
    </Data>
  );
}

export default App;
