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
        <div className='bodyDiv'>
          <form className='form'>
            <input
              className='inp'
            ></input>
            <Button className='d-flex justify-content-center align-items-center addBtn'>Add</Button>
          </form>
          <ul className='list'>
            <li className='task'>Task one</li>
            <Button className='btn-success d-flex justify-content-center align-items-center doneBtn'>Done</Button>
            <Button className='btn-danger d-flex justify-content-center align-items-center removeBtn'>Remove</Button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
