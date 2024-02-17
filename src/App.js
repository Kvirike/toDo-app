import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Date from './components/date'
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='formDiv'>
        <div className='headerDiv'>
          <Button className='btn btn-info'>Accomplished Tasks</Button>
          <Date/>
        </div>
        <div className='div'>    
          <form className='form'>
            <input
              className='inp'
            ></input>
            <Button className='btns btn-primary'>Add</Button>
          </form>
          <ul className='list'>
            <li>Task one</li>
            <Button className='btn btn-success'>Done</Button>
            <Button className='btn btn-danger'>Remove</Button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
