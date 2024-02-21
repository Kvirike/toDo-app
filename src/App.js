import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Date from './components/date'
import { Button } from 'react-bootstrap';
import remove from './media/remove.png'
import done from './media/done.png'
import oldTasks from './media/old.png'

function App() {
  return (
    <div className="App">
      <div className='formDiv'>
        <div className='headerDiv'>
          <div><img className='oldTasks' src={oldTasks}></img> </div>
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
            <div><img className='taskBtns' src={remove}></img></div>
            <div><img className='taskBtns' src={done}></img></div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
